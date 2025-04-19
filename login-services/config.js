import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
dotenv.config();



let supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_ACCESS_TOKEN)
  
var {data,err} = await supabase.auth.signInWithPassword({"email":process.env.EMAIL,"password":process.env.PASSWORD})




export  {supabase};

