import { Router } from "express";

import {
  create,
  del,
  findAll,
  findOne,
  update,
} from "../controllers/station-controller";

const router = Router();

router.post("/", create);
router.put("/:id", update);
router.get("/", findAll);
router.get("/:id", findOne);
router.delete("/:id", del);

export { router as stationRouter };
