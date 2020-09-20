// Services
import setJWT, { verifyJWT } from '../../services/jsonwebtoken';

// Types
import { Request, Response, NextFunction } from "express";

// Handlers
import HandlerError from "@middleware/handler/error";

export default async function Authenticate(request: Request, response: Response) {
  try {
    // @ts-ignore
    const { agendasys } = request.body;

    const userAuthenticate = {
      id: agendasys.id,
    };

    const jwt = await setJWT(userAuthenticate);

    response.status(200).json({
      code: 200,
      message: 'Você foi autenticado com sucesso',
      authorization: jwt,
      personal: agendasys,
    });
  } catch (error) {
    response.status(200).json({
      code: 500,
      message: 'Não foi possivel autenticar você',
      error: error.message,
    });
  }
}

export async function Verify(request: Request, response: Response, next: NextFunction) {
  try {
    const token = await verifyJWT(request.headers.authorization);

    if (token?.code === 10) {
      return HandlerError(response, 403, token, "Não foi possivel autenticar seu client")
    }

    next();
  } catch (error) {
    return HandlerError(response, 500, error, "Houve um erro inesperado")
  }
}
