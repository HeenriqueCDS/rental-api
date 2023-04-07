import express from "express";

import { bikeRouter } from "./infra/http/routes/bike.routes";

const app = express();

app.use(express.json());

app.use("/bikes", bikeRouter);

export { app };
