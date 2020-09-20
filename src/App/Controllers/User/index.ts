import UserModel from "@models/User";

// Types
import { Request, Response } from "express";
import { Document } from "mongoose";

// Middleware
import HandlerError from "@middleware/handler/error";
import HandlerSuccess from "@middleware/handler/sucess";

class User {
  async store(request: Request, response: Response) {
    try {
      const newUser: Document = await UserModel.create(request.body)

      if (!newUser) {
        return HandlerError(response, 500, null, "Não foi possivel realizar seu cadastro")
      }

      // @ts-ignore
      return HandlerSuccess(response, 200, null, "Cadastro realizado com sucesso", { ...newUser?._doc })
    } catch (error) {
      return HandlerError(response, 500, error, "Houve um erro inesperado")
    }
  }

  async show(request: Request, response: Response) {
    try {
      // @ts-ignore
      const showUser: Document = await UserModel.findById(request?.params?.idUser)

      if (!showUser) {
        return HandlerError(response, 500, null, "Não foi possivel encontrar o seu usuário")
      }

      // @ts-ignore
      HandlerSuccess(response, 200, null, "Seu usuário foi encontrado com sucesso", showUser._doc)
    } catch (error) {
      return HandlerError(response, 500, error, "Houve um erro inesperado")
    }
  }

  async index(_request: Request, response: Response) {
    try {
      // @ts-ignore
      const allUser: Array<Document> = await UserModel.find()

      if (!allUser || allUser.length === 0) {
        return HandlerError(response, 500, null, "Não foi possivel listar todos os usuarios")
      }

      // @ts-ignore
      HandlerSuccess(response, 200, null, "Todos os usuários foram encontrados com sucesso", allUser)
    } catch (error) {
      return HandlerError(response, 500, error, "Houve um erro inesperado")
    }
  }

  async update(request: Request, response: Response) {
    try {
      // @ts-ignore
      const updateUser: Document = await UserModel.findByIdAndUpdate(request?.params?.idUser, request.body)

      if (!updateUser) {
        return HandlerError(response, 500, null, "Não foi possivel atualizar seu cadastro")
      }

      // @ts-ignore
      HandlerSuccess(response, 200, null, "Seu usuário foi atualizado com sucesso", updateUser?._doc)
    } catch (error) {
      return HandlerError(response, 500, error, "Houve um erro inesperado")
    }
  }

  async delete(request: Request, response: Response) {
    try {
      // @ts-ignore
      const deleteUser: Document = await UserModel.findByIdAndDelete(request?.params?.idUser)

      if (!deleteUser) {
        return HandlerError(response, 500, null, "Não foi possivel deletar seu usuário")
      }

      // @ts-ignore
      HandlerSuccess(response, 200, null, "Seu usuário foi deletado com sucesso", deleteUser._doc)
    } catch (error) {
      return HandlerError(response, 500, error, "Houve um erro inesperado")
    }
  }
}

export default new User()
