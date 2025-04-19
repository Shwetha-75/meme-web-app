import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"

dotenv.config()

const app=express();

const cors_origin={
    origin:process.env.FRONTEND,
    credentials:true
}
app.use(cors(cors_origin));
app.use(express.json())

// Create a single supabase client for interacting with your database

app.get("/",(req,resp)=>{
      resp.json("ok")
});


app.post("/login",async(req,resp,next)=>{
  
  const email = req.body['email'];
  const password = req.body['password'];
  
  const response = await supabase.from('user_model').select("*").eq('email',email)
   
  if(response.data[0].password === password){
    resp.json({"status":"ok"})
  }
   resp.json({"status":"no"})
},(req,res)=>{

})


app.post("/register",async(req,resp)=>{
    const data={
        "email":req.body.email,
        "user_name":req.body.userName,
        "first_name":req.body.firstName,
        "last_name":req.body.lastName,  
        "linkedInurl":req.body.linkedInUrl,
        "githuburl":req.body.githuburl,
        "password":req.body.password,
        "confirm_password":req.body.confirmPassword
    }
   console.log(data)
   const response = (await supabase.from('user_model').insert(data));

   resp.json("ok")
})

app.listen(process.env.PORT,()=>{

    console.log("Hello from server");

})