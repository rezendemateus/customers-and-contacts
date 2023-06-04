import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";

const ensurePermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.user.id);
  if (req.user.id !== req.params.id) {
    throw new AppError("Not authorized!", 401);
  }

  next();
};

export { ensurePermission };
