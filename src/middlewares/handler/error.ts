// Types
import { Response } from "express";

export default (response: Response, code: Number, error: any, description: String) => {
  return response.status(200).json({
    code: code,
    error: description,
    details: {
      error: error?.message,
      code: error?.code
    }
  })
}
