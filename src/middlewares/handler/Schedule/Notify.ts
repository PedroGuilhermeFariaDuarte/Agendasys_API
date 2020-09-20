import { parseISO, format } from "date-fns"
import pt from "date-fns/locale/pt";

// Types
import { Response } from "express";

// Helpers
import ErrorHandler from "@middleware/handler/error";

// Services
import SendSMS from "@middleware/Zenvia/SMS";

export default async (response: Response, code: Number, success: any, description: String, data: any, type?: boolean) => {
  let messageSMS = '';

  if (type) {

    // @ts-ignore
    const date_schedule = format(new Date(data?.date_schedule), "dd 'de' MMMM 'de' y 'ás' HH:m:s", {
      locale: pt
    })

    messageSMS = `${description}\n\nAgendado para: ${date_schedule}\n\nUse este codigo ${data.qrcode} para consultar via WhatsApp`;
  } else {
    messageSMS = `${description}`;
  }

  const listPromises = [ SendSMS(response, "sms", messageSMS, "troubled-glasses", data.phone),
  SendSMS(response, "whatsapp", messageSMS, "chain-shake", data.phone) ]

  Promise.all(listPromises)
    .catch(error => ErrorHandler(response, 500, error, "Houve um erro inesperado"))

  response.status(200).json({
    code: code,
    success: description,
    details: {
      message: success?.message,
      code: success?.code
    },
    // @ts-ignore
    data: data?.length > 0 ? data : { ...data }
  })
}
