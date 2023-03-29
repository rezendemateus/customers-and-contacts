import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { AnySchema } from "yup";

const ensureDataIsValidMiddleware =
  (serializer: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const validatedData = await serializer.validate(req.body, {
      stripUnknown: true,
      abortEarly: false,
    });
    req.body = validatedData;
    return next();
  };

export { ensureDataIsValidMiddleware };
