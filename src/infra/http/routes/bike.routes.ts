import { Router } from "express";

import { BikeService } from "../../services/bike-service";

const bikeRouter = Router();

const bikeService = new BikeService();

bikeRouter.get("/", async (request, response) => {
  const bikes = await bikeService.findAll();
  return response.json(bikes);
});

bikeRouter.post("/", (request, response) => {
  const { stationId } = request.body;
  const bike = bikeService.create(stationId);

  return response.json(bike);
});

export { bikeRouter };
