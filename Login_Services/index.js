import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authentication } from "./authentication.js";
import axios from "axios";
import cookieParser from "cookie-parser";

dotenv.config()
const app=express();
const cors_origin={
    origin:process.env.FRONTEND,
    credentials:true
}

app.use(cors(cors_origin));
app.use(express.json());
app.use(cookieParser());

app.post("/login",authentication,async(req,res)=>{
    const response = await axios.get(`http://localhost:5004/generate-access-token/${req.body['email']}`);

    res.cookie('token',response.data['access_token'],{
        httpOnly:true,
        secure:false,
        sameSite:null,
        maxAge:60*60*1000
    })
    
    res.json({"status":"ok"})
});

app.get("/landing",(req,resp)=>{
    console.log(req.headers)
    resp.json("ok")
})

app.listen(process.env.PORT,()=>{
    console.log("Login Service is running......")
})

