import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// import authRoutes from "./routes/auth.route.js"

import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());  //allows to parse incoming requests from req.body
app.use(cookieParser());



import complaintRoutes from "./routes/complaint.routes.js"
app.use("/api/complaint", complaintRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server listening at port: ", PORT)
})