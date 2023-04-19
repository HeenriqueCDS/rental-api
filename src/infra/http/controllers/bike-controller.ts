import { Request, Response } from "express";

import { ICreateBikeDTO } from "../../../domain/dtos/create-bike-dto";
import { BikeService } from "../../../domain/services/bike-service";
import prisma from "../../database/client";
import { BikeRepository } from "../../database/repositories/bike-repository";
import { StationRepository } from "../../database/repositories/station-repository";

const repository = new BikeRepository(prisma);
const stationRepo = new StationRepository(prisma);
const service = new BikeService(repository, stationRepo);

// Tratamento de requisição e resposta
const create = async (request: Request, response: Response) => {
  const { name, stationId }: ICreateBikeDTO = request.body;

  await service.create({
    name,
    stationId,
  });

  return response.status(201).send();
};

const update = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name, stationId }: Partial<ICreateBikeDTO> = request.body;

  await service.update(id, {
    name,
    stationId,
  });

  return response.status(204).send();
};

const findOne = async (request: Request, response: Response) => {
  const { id } = request.params;

  const bike = await service.findById(id);

  return response.json(bike);
};

const del = async (request: Request, response: Response) => {
  const { id } = request.params;

  await service.delete(id);

  return response.status(204).send();
};

const findAll = async (request: Request, response: Response) => {
  const bikes = await service.findAll();

  return response.json(bikes);
};

export { create, update, findAll, findOne, del };
