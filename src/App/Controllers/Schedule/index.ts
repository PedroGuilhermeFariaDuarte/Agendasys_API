import ScheduleModel from "@models/Schedule";

// Types
import { Request, Response } from "express";
import { Document } from "mongoose";
import { ObjectID, ObjectId } from "mongodb";

// Middleware
import HandlerError from "@middleware/handler/error";
import HandlerSuccess from "@middleware/handler/sucess";
import HandlerNotify from "@middleware/handler/Schedule/Notify";

class Schedule {
  async store(request: Request, response: Response) {
    try {
      const newSchelude: Document = await ScheduleModel.create(request.body)

      if (!newSchelude) {
        return HandlerError(response, 500, null, "Não foi possivel realizar seu agendamento")
      }

      // @ts-ignore
      HandlerNotify(response, 200, null, "Agendamento realizado com sucesso", { ...newSchelude?._doc, phone: request.body?.phone, qrcode: request.body.qrcode }, true)
    } catch (error) {
      return HandlerError(response, 500, error, "Houve um erro inesperado")
    }
  }

  async show(request: Request, response: Response) {
    try {
      const idUser: ObjectID = new ObjectId(request?.params?.idUser)
      // @ts-ignore
      const showShcedule: Array<Document> = await ScheduleModel.aggregate([
        {
          $match: {
            id_user: idUser
          }
        },
        {
          $lookup: {
            from: "users",
            localField: "id_user",
            foreignField: "_id",
            as: "pacient"
          }
        }
      ])

      if (!showShcedule || showShcedule.length === 0) {
        HandlerError(response, 500, null, "Não foi possivel encontrar o seu agendamento")
      }

      HandlerSuccess(response, 200, null, "Seu agendamento foi encontrado com sucesso", showShcedule)
    } catch (error) {
      HandlerError(response, 500, error, "Houve um erro inesperado")
    }
  }

  async index(_request: Request, response: Response) {
    try {

      HandlerError(response, 403, null, "Acesso Negado")

    } catch (error) {
      HandlerError(response, 500, error, "Houve um erro inesperado")
    }
  }

  async update(request: Request, response: Response) {
    try {
      // @ts-ignore
      const updateSchedule: Document = await ScheduleModel.findByIdAndUpdate(request?.params?.idSchedule, request.body)

      if (!updateSchedule) {
        return HandlerError(response, 500, null, "Não foi possivel atualizar seu agendamento")
      }

      // @ts-ignore
      HandlerNotify(response, 200, null, "Seu agendamento foi atualizado com sucesso", { ...updateSchedule?._doc, phone: request.body?.phone, qrcode: request?.body?.qrcode }, true)
    } catch (error) {
      return HandlerError(response, 500, error, "Houve um erro inesperado")
    }
  }

  async delete(request: Request, response: Response) {
    try {
      // @ts-ignore
      await ScheduleModel.findByIdAndDelete(request?.params?.idSchedule)

      // @ts-ignore
      HandlerNotify(response, 200, null, "Seu agendamento foi cancelado com sucesso", { phone: request?.body?.phone }, false)
    } catch (error) {
      return HandlerError(response, 500, error, "Houve um erro inesperado")
    }
  }
}

export default new Schedule()
