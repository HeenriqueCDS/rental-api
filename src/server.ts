import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { AppError } from "./errors/app-error";
import { bikeRouter } from "./infra/http/routes/bike.routes";
import { stationRouter } from "./infra/http/routes/station.routes";

const app = express();

app.use(express.json());

app.use("/bikes", bikeRouter);
app.use("/stations", stationRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error ${err.message}`,
  });
});

export { app };
