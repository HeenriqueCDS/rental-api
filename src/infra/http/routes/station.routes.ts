import { Router } from "express";

import { createStation, getStations } from "../controllers/station-controller";

const stationRouter = Router();

stationRouter.post("/", createStation);

stationRouter.get("/", getStations);

export { stationRouter };
