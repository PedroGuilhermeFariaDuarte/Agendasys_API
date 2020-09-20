// Types
import { Request, Response, NextFunction } from "express";

// Handlers
import ErrorHandler from "@middleware/handler/error";

// Utils
import SchemaSchedule from "@utils/schemas/Schedule";

export default async (request: Request, response: Response, next: NextFunction) => {
  try {
    if (!(await SchemaSchedule.isValid(request.body))) ErrorHandler(response, 500, null, "Seus dados estão invalidos")

    next()
  } catch (error) {
    ErrorHandler(response, 500, error, "Houve um error")
  }
}
