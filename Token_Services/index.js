import express from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import crypto from "crypto"
dotenv.config()


// function generateCryptoKey(){
//     console.log(crypto.randomBytes(17).toString('hex'));

// }

const app=express()


// encoding the access token
app.get("/generate-token/:username",(req,resp)=>{
    const username = req.params.username;
    const jwt_token = process.env.JWT_ACCESS_TOKEN;
    const data ={
        time:new Date(),
        username:username
    }

    const token = jsonwebtoken.sign(data,jwt_token);

    resp.json(`Hello ${username} user ${token}`)

})

// decoding the access token 
app.get("/validate-token",(req,resp)=>{
   const authHeaders = req.headers[process.env.JWT_Request_TOKEN];
   const verified = jsonwebtoken.verify(authHeaders,process.env.JWT_ACCESS_TOKEN);
   if(verified){
    resp.json("Successful");

   }
   resp.json("Not Successful")

})


app.listen(process.env.PORT,()=>{
    console.log("Token server is running.......")
})