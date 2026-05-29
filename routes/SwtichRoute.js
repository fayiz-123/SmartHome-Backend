// routes/ledRoute.js

import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/led", async (req, res) => {
  try {
    const { status } = req.body;

    // ESP32 Local IP
    await axios.get(
      `http://192.168.1.104/led?state=${status}`
    );

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