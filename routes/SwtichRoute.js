import express from "express";
import mqttClient from "../utils/mqttClient.js";

const router = express.Router();

router.post("/led", async (req, res) => {
  try {
    const { status } = req.body;

    mqttClient.publish("home/led", status);

    res.json({
      success: true,
    });

  } catch (err) {
    res.status(500).json({
      message: "Failed",
    });
  }
});

export default router;