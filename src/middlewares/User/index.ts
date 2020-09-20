import UserModel from "@models/User"

// Types
import { Request, Response, NextFunction } from "express";
import { Document } from "mongoose";
import { ObjectID, ObjectId } from "mongodb";

// Handlers
import HandlerError from "@middleware/handler/error";
import HandlerSuccess from "@middleware/handler/sucess";

export const CreateHealthProblem = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const newHealthProblem = await UserModel.findByIdAndUpdate(request.params.idUser, {
      $push: {
        health_problems: {
          _id: new ObjectId(),
          ...request.body
        }
      }
    })

    if (!newHealthProblem) return HandlerError(response, 500, null, "Não foi possivel adicionar um novo item")

    // @ts-ignore
    HandlerSuccess(response, 200, "Item adicionado com sucesso", "Seu novo item foi adicionado", newHealthProblem?._doc)

  } catch (error) {
    return HandlerError(response, 500, error, "Houve um error")
  }
}
