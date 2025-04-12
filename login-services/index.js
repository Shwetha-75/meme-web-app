import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken"

dotenv.config()


const app=express();


function generateAccessTokens(username){
     
}

app.listen(process.env.PORT,()=>{
    console.log("Login Service is running......")
})

