import { Request, Response } from "express";

import { ICreateRentalDTO } from "../../../domain/dtos/create-rental-dto";
import { RentalService } from "../../../domain/services/rental-service";
import prisma from "../../database/client";
import { BikeRepository } from "../../database/repositories/bike-repository";
import { RentalRepository } from "../../database/repositories/rental-repository";
import { UserRepository } from "../../database/repositories/user-repository";

const repository = new RentalRepository(prisma);
const usersRepository = new UserRepository(prisma);
const bikesRepository = new BikeRepository(prisma);
const service = new RentalService(repository, usersRepository, bikesRepository);

const create = async (req: Request, res: Response) => {
  const { bikeId, previewedEnd, userId }: ICreateRentalDTO = req.body;

  await service.create({
    bikeId,
    previewedEnd,
    userId,
  });

  return res.status(201).send();
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { bikeId, previewedEnd, userId }: Partial<ICreateRentalDTO> = req.body;

  await service.update(id, {
    bikeId,
    previewedEnd,
    userId,
  });

  return res.status(204).send();
};

const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  const rental = await service.findById(id);

  return res.json(rental);
};

const del = async (req: Request, res: Response) => {
  const { id } = req.params;

  await service.delete(id);

  return res.status(204).send();
};

const findAll = async (req: Request, res: Response) => {
  const rentals = await service.findAll();

  return res.json(rentals);
};

export { create, update, findAll, findOne, del };
