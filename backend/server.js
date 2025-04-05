import express from 'express'
import cors from 'cors'

const app=express();


app.use(cors({
    origin:'http://localhost:5173'
}))


import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://tlcttbeupgnewrlxisim.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsY3R0YmV1cGduZXdybHhpc2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MzY5MTAsImV4cCI6MjA1OTQxMjkxMH0.355IHvRck44LkIV-VEdemeDRhi5wzs3kBYRqfzqpqaY')

console.log(supabase)
app.get("/",(req,resp)=>{
      resp.json("ok")
});


app.listen(5656,()=>{
    console.log("Hello from server")
})