import express from "express";
const router = express.Router();

router.get('/azan', async (req, res) => {
    try {
        const response = await fetch("https://api.aladhan.com/v1/timings?latitude=10.1076&longitude=76.3516&method=1")
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        return res.status(200).json({ success: true, message: "Time Fetched Successfully", data: data })
    } catch (error) {
        res.status(500).json({
            message: "Failed",
        });
    }
})

export default router;