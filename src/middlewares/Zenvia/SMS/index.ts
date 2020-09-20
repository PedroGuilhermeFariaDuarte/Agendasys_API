import { Client, TextContent } from "@zenvia/sdk";

// Types
import { Response } from "express";

// Handler
import HandlerError from "@middleware/handler/error";

export default async (response: Response, channel: String, content: String, from: string, to: string) => {
  try {
    // @ts-ignore
    const client = new Client(process.env.TOKEN_ZENVIA)

    // @ts-ignore
    const actualChannel = client.getChannel(channel)

    // @ts-ignore
    const messageContent = new TextContent(content)

    actualChannel.sendMessage(from, to, messageContent)
      .catch(error => HandlerError(response, 500, error, "Houve um erro inesperado"))
  } catch (error) {
    return HandlerError(response, 500, error, "Houve um erro inesperado")
  }

}
