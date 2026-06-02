import express from "express";
import cors from "cors";
import switchRoute from "./routes/switchRoute.js";
import azanRoute from "./routes/azanRoute.js"
import dotenv from "dotenv"
dotenv.config()
import './utils/mqttClient.js'

const app = express();

// Allow React frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true
  })
);

app.use(express.json());

app.use("/api", switchRoute);
app.use("/api",azanRoute)

app.listen(5000, () => {
  console.log("Server running");
});