import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import  { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt'

dotenv.config()

const app=express();

const cors_origin={
    origin:process.env.FRONTEND,
    credentials:true
}
app.use(cors(cors_origin));
app.use(express.json())

// Create a single supabase client for interacting with your database

// Replace with your Supabase URL and Anon Key
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ACCESS_TOKEN;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

(async()=>{

    try{

        await supabase.auth.signInWithPassword({
            "email":process.env.EMAIL,
            "password":process.env.PASSWORD
        })
      console.log("Authenticated Successfully !!")
    }catch(error){
        console.log(error)
    }


})();

let responseObject = [];

app.get("/",(req,resp)=>{
    (async()=>{
        const {data,error} = await supabase.from('user_model').select("email,password")
    
        if(error){
           console.log(error)
        }
        responseObject=[...data]
      console.log(data)
    })();

   console.log(responseObject);

})

app.post("/login",async(req,resp,next)=>{
  
  const {email,password} = req.body
  console.log(email)
  console.log(password)
  const {data,error} = await supabase.from('user_model').select("password").eq('email',email)
   
  if(error || data.length===0){
    return resp.json({'status':"user not exist"})
  }

   const isMatch = await bcrypt.compare(password,data[0].password)
   console.log(isMatch)
   if(!isMatch){
    return resp.json({'status':"false"})
   }
   next()
},(req,resp)=>{
    console.log("User verified!!")
    resp.json({"status":"true"})
})


// for registration using upsert
app.post("/register",async(req,resp)=>{
    const {email,password} = req.body;
    const hashedPassword =await bcrypt.hash(password,10);
    console.log(email+"-"+password)
    const {data,error} = await supabase.from('user_model').upsert([{
        email,password:hashedPassword
    }],{onConflict:['email']});
    console.log(error)
    if(error){
        if(error.message.includes('duplicate key')){
          return  resp.json({"status":"false"})
        }
        return resp.json({"status":"failed"})
    }
    console.log(data)
    resp.status(200).json({"status":'true'})
})


// app.post("/register",async(req,resp)=>{ 
//     const data={
//         "email":req.body.email,
//         "password":req.body.password,
//         "confirm_password":req.body.confirmPassword
//     }
//    console.log(data)
//    const response = (await supabase.from('user_model').insert(data));
//    resp.json("ok")
// })

app.listen(process.env.PORT,()=>{

    console.log("Hello from server");

})