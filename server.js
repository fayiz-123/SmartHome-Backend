import express from "express";
import cors from "cors";
import switchRoute from "./routes/SwtichRoute.js";

const app = express();

// Allow React frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  })
);

app.use(express.json());

app.use("/api", switchRoute);

app.listen(5000, () => {
  console.log("Server running");
});