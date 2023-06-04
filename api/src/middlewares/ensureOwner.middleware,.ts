import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../errors/errors";

const ensureOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientRepo = AppDataSource.getRepository(Client);
  const contactRepo = AppDataSource.getRepository(Contact);

  // const owner = await clientRepo.findOneByOrFail({id:req.user.id})
  const verifyRelation = await contactRepo
    .createQueryBuilder("contact")
    .innerJoinAndSelect("contact.client", "client")
    .where("contact.id = :contactId", { contactId: req.params.id })
    .andWhere("client.id = :clientId", { clientId: req.user.id })
    .getOne();

  console.log(verifyRelation);

  if (!verifyRelation) {
    throw new AppError("Not auhtorized!", 401);
  }

  next();
};

export { ensureOwnerMiddleware };
