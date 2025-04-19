import {createClient} from "@supabase/supabase-js";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config()

let supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_ACCESS_TOKEN)

const {data,error} = await supabase.auth.signInWithPassword({"email":process.env.EMAIL,"password":process.env.PASSWORD})

const app=express();

const cors_origin={
    origin:process.env.URL,
    credentials:true
}
app.use(cors(cors_origin));
app.use(express.json())

app.get("/",(req,resp)=>{
    resp.json("ok");

})


app.get("/register",async(req,resp)=>{
    const data ={
        "email": req.body.email,
        "user_name":req.body.userName,
        "first_name":req.body.firstName,
        "last_name":req.body.lastName,  
        "linkedInurl":req.body.linkedInUrl,
        "githuburl":req.body.githuburl,
        "password":req.body.password,
        "confirm_password":req.body.confirmPassword
    }

});

app.listen(process.env.PORT,()=>{
    console.log("Register Service is listening...")
});
