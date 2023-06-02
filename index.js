import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import customersRoute from "./routes/customers.js"
import bodyParser from "body-parser";
import cors from "cors";

const PORT = process.env.PORT || 8800;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())
dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB");
    }catch(err){
        throw err;
    }
;}

app.use("/api/customers", customersRoute);

app.listen(PORT, () => {
    connect();
    console.log("Connected to backend!");
})