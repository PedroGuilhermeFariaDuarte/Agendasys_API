// Types
import { Response } from "express";

export default (response: Response, code: Number, success: any, description: String, data: any) => {
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
