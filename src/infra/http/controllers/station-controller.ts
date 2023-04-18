import { Request, Response } from "express";

import { ICreateStationDTO } from "../../../domain/dtos/create-station-dto";
import { StationService } from "../../../domain/services/station-service";
import prisma from "../../database/client";
import { StationRepository } from "../../database/repositories/station-repository";

const repository = new StationRepository(prisma);
const service = new StationService(repository);

const create = async (request: Request, response: Response) => {
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

const update = async (request: Request, response: Response) => {
  const { id } = request.params;
  const {
    name,
    description,
    address,
    latitude,
    longitude,
    capacity,
  }: Partial<ICreateStationDTO> = request.body;

  await service.update(id, {
    name,
    description,
    address,
    latitude,
    longitude,
    capacity,
  });

  return response.status(204).send();
};

const findAll = async (request: Request, response: Response) => {
  const stations = await service.findAll();

  return response.json(stations);
};

const findOne = async (request: Request, response: Response) => {
  const { id } = request.params;

  const station = await service.findById(id);

  return response.json(station);
};

const del = async (request: Request, response: Response) => {
  const { id } = request.params;

  await service.delete(id);

  return response.status(204).send();
};

export { create, update, findAll, del, findOne };
