import { Request, Response } from "express";

import { AppError } from "../../../errors/app-error";
import prisma from "../../database/client";
import { BikeRepository } from "../../database/repositories/bike-repository";
import { BikeService } from "../../../domain/services/bike-service";

const repository = new BikeRepository(prisma);
const service = new BikeService(repository);

const createBike = async (request: Request, response: Response) => {
  const { stationId, name } = request.body;

  if (!stationId) {
    throw new AppError("Missing stationId");
  }

  if (!name) {
    throw new AppError("Missing name");
  }

  await service.create({ stationId, name });

  return response.send();
};

const getBikes = async (request: Request, response: Response) => {
  const bikes = await service.findAll();

  return response.json(bikes);
};

export { createBike, getBikes };
