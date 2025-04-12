import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"

dotenv.config()


import { createClient } from '@supabase/supabase-js'
let supabase = createClient(process.env.SUPABASE_URL,
    process.env.SUPABASE_ACCESS_TOKEN)

const {data,error}=await supabase.auth.signInWithPassword({"email":process.env.EMAIL,"password":process.env.PASSWORD}) 



const app=express();


app.use(cors({
    origin:'http://localhost:5173'
}))

app.use(express.json())

// Create a single supabase client for interacting with your database



app.get("/",(req,resp)=>{
      resp.json("ok")
});


app.post("/login",async(req,resp)=>{
   const email=req.body.email;
   const password=req.body.password;
   console.log(email)
  const response = await supabase.from('user_model').select("*").eq('email',email)
   
  if(response.data[0].password === password){
    resp.json(`Hello ${response.data[0].first_name}`)
  }
   
})


app.post("/register",async(req,resp)=>{
    const data={
        "email":req.body.email,
        "first_name":req.body.first_name,
        "last_name":req.body.last_name,  
        "linkedinurl":req.body.linkedInUrl,
        "password":req.body.password,
        "confirm-password":req.body.confirm_password
    }
   console.log(data)
   const response = (await supabase.from('user_model').insert(data));

   resp.json("ok")
})

app.listen(process.env.PORT,()=>{

    console.log("Hello from server");

})