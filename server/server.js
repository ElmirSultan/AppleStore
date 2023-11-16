import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoutes.js"
import authRoutes from "./routes/authRoutes.js"
dotenv.config();

const myapp = express();
myapp.use(express.json());
myapp.use(helmet());
myapp.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
myapp.use(morgan("common"));
myapp.use(bodyParser.json({ limit: "30mb", extended: true }));
myapp.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
myapp.use(cors());


myapp.get("/",(req,res) => res.send("Welcome to Elmir Sultan's project"))

myapp.use("/products",productRoutes)
myapp.use("/auth",authRoutes);

// SETUP
const PORT = process.env.PORT || 4500;
mongoose.connect(process.env.MONGO_URL)
.then(()=> {
    myapp.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
}).catch((error) => console.log(`${error}  did not connect`))