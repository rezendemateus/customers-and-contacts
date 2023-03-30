import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { AppError } from "../errors/errors";

const ensureDataIsValidMiddleware =
  (serializer: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = await serializer.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });
      req.body = validatedData;
      return next();
    } catch (error) {
      throw new AppError(error.message, error.statusCode);
    }
  };

export { ensureDataIsValidMiddleware };
