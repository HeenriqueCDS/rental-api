import { Request, Response } from "express";

import { StationService } from "../../../domain/services/station-service";
import prisma from "../../database/client";
import { StationRepository } from "../../database/repositories/station-repository";

const repository = new StationRepository(prisma);
const service = new StationService(repository);

const createStation = async (request: Request, response: Response) => {
  const { name, description, address, latitude, longitude, capacity } =
    request.body;

  await service.create({
    name,
    description,
    address,
    latitude,
    longitude,
    capacity,
  });

  return response.status(201).send();
};

const getStations = async (request: Request, response: Response) => {
  const stations = await service.findAll();

  return response.json(stations);
};

export { createStation, getStations };
