import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/errors";
import { ICreateSessionRequest } from "../../interfaces/session";
import jwt from "jsonwebtoken";

const createSessionService = async (data: ICreateSessionRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const user = await clientRepository.findOneBy({
    email: data.email,
  });

  const passwordMatch = await compare(data.password, user.password);

  if (!user || !passwordMatch) {
    throw new AppError("Email or password invalid!", 403);
  }

  const token = jwt.sign({}, process.env.SECRET_kEY!, {
    subject: String(user.id),
    expiresIn: "24h",
  });

  return { token: token };
};

export { createSessionService };
