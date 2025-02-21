import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { newComplaint } from "../controllers/complaint.controller.js";


const router = express.Router();

router.post("/new-complaint", upload.fields([
    {
        name: "receiptFile",
        maxCount: 1,
    },
    {
        name: "images",
        maxCount: 5,
    }
]), newComplaint);

export default router;