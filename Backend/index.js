import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  return res.status(200).json({
    message: "I'm coming from backend",
    success: true,
  });
});

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  credential: true,
};
app.use(cors(corsOptions));

// get api
app.use("/api/v1/user", userRoute);
"http://localhost:8000/api/v1/user/register"

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
