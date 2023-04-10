import { Router } from "express";

import { createBike, getBikes } from "../controllers/bike-controller";

const bikeRouter = Router();

bikeRouter.get("/", getBikes);

bikeRouter.post("/", createBike);

export { bikeRouter };
