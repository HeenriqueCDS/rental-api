import { Request, Response } from "express";

import { BikeService } from "../../../domain/services/bike-service";
import { AppError } from "../../../errors/app-error";
import prisma from "../../database/client";
import { BikeRepository } from "../../database/repositories/bike-repository";
import { StationRepository } from "../../database/repositories/station-repository";

const repository = new BikeRepository(prisma);
const stationRepository = new StationRepository(prisma);
const service = new BikeService(repository, stationRepository);

const createBike = async (request: Request, response: Response) => {
  const { stationId, name } = request.body;

  await service.create({ stationId, name });

  return response.status(201).send();
};

const getBikes = async (request: Request, response: Response) => {
  const bikes = await service.findAll();

  return response.json(bikes);
};

export { createBike, getBikes };
