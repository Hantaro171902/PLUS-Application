import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.get("/", (_,res) => {
    return res.status(200).json({
        message:"I'm coming from backend",
        success:true
    })
})

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOptions = {
    origin:'http://localhost:5173',
    credential:true
}
app.use(cors(corsOptions));

PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
