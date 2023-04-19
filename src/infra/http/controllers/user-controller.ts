import { Request, Response } from "express";

import { ICreateUserDTO } from "../../../domain/dtos/create-user-dto";
import { UserService } from "../../../domain/services/user-service";
import prisma from "../../database/client";
import { UserRepository } from "../../database/repositories/user-repository";

const repository = new UserRepository(prisma);
const service = new UserService(repository);

const create = async (req: Request, res: Response) => {
  const { email, name, password }: ICreateUserDTO = req.body;

  await service.create({
    email,
    name,
    password,
  });

  return res.status(201).send();
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, name, password }: Partial<ICreateUserDTO> = req.body;

  await service.update(id, {
    email,
    name,
    password,
  });

  return res.status(204).send();
};

const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await service.findById(id);

  return res.json(user);
};

const del = async (req: Request, res: Response) => {
  const { id } = req.params;

  await service.delete(id);

  return res.status(204).send();
};

const findAll = async (req: Request, res: Response) => {
  const users = await service.findAll();

  return res.json(users);
};

export { create, update, findAll, findOne, del };
