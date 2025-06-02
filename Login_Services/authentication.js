import {supabase} from "./config.js";



const authentication = async(req,res,next)=>{
    
    const email = req?.body['email'];
    const password = req?.body['password'];
    const response = await supabase.from(process.env.TABLE).select("*").eq('email',email)
    console.log("Email: ",email)
    console.log("Password: ",password)
   if(response.data[0].password === password){
       console.log("Success Full !!")  
       next()
       
   }
   
}

export {authentication}