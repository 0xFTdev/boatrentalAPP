import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import shipRouter from "./controller/ships.js";

await mongoose.connect(process.env.MONGODB_URI);

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: process.env.BACKEND_URL,
  optionsSuccessStatus: 200,
};

app.use(express());
app.use(cors(corsOptions));
app.use("/ships", shipRouter);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});