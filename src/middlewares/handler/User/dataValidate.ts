// Types
import { Request, Response, NextFunction } from "express";

// Handlers
import ErrorHandler from "@middleware/handler/error";

// Utils
import SchemaUser from "@utils/schemas/User";

export default async (request: Request, response: Response, next: NextFunction) => {
  try {
    if (!(await SchemaUser.isValid(request.body))) return ErrorHandler(response, 500, null, "Seus dados estão invalidos")

    next()
  } catch (error) {
    ErrorHandler(response, 500, error, "Houve um error na validação dos dados")
  }
}
