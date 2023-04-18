import { Router } from "express";

import {
  create,
  findAll,
  update,
  findOne,
  del,
} from "../controllers/bike-controller";

const router = Router();

router.post("/", create);
router.put("/:id", update);
router.get("/", findAll);
router.get("/:id", findOne);
router.delete("/:id", del);

export { router as bikeRouter };
