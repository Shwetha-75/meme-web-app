import React from 'react'
// import { Status } from '../App';
import axios from "axios"

function reducer(state,action){
     switch(action.type){
      case"userName":return{
        ...state,
        "userName":action.nextUserName
      }
      case "firstName": return {
        ...state,
        "firstName":action.nextFirstName
      }
      case "lastName": return {
        ...state,
        "lastName":action.nextLastName
      }
      case "email": return {
        ...state,
        "email":action.nextEmail
      }

      case "linkedInUrl": return {
        ...state,
        "linkedInUrl":action.nextLinkedInUrl
      }

      case "password": return {
        ...state,
        "password": action.nextPassword
      }

      case "confirmPassword": return {
        ...state,
        "confirmaPassword":action.nextConfirmPassword
      }
      default: return {...state}
     }
}

export default function Register() {

   const [state,dispatch] = React.useReducer(reducer,{
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:"",
   confirmPassword:"",
   linkedInUrl:""
   })

 const handleOnSubmit=(e)=>{
  e.preventDefault();
try{

  const form = new FormData()
  form.append("userName",state.userName);
  form.append("firstName",state.firstName);
  form.append("lastName",state.lastName);
  form.append("email",state.email);
  form.append("linkedInUrl",state.linkedInUrl);
  form.append("password",state.password);
  form.append("confirmPassword",state.confirmPassword);

  
    const response =  axios.post("http://locahost:3076/register",form,{
      headers:{
        "Content-Type": "application/json"
      }
    })
    console.log(response)

}  catch(error){
  console.log(error)
}
  
 }

  return (
    <div className={`overlay--display--register `}>
        <title>Register Page</title>
        <div className="register---display---tag flex flex-col items-center gap-3">
            
      <form onSubmit={handleOnSubmit}>

    
        <div className="input--element--outer--div--tag">
          <label className="text-white">User Name:</label>
          <input
             type="text"
             name="userName"
              onChange={(e)=>dispatch(
               {
                  type:"userName ",
                  nextUserName:e.target.value
               }
              )} 
             className="input--element"
             ></input>
           </div>

           <div className="input--element--outer--div--tag">
          <label className="text-white">Email:</label>
          <input
             type="email"
             name="email"
             onChange={(e)=>dispatch({
                type:"email",
                nextEmail:e.target.value
             })}
             className="input--element"
             ></input>
           </div>   
         
           <div className="input--element--outer--div--tag">
          <label className="text-white">First Name:</label>
          <input
             type="text"
             nam="firstName"
             onChange={(e)=>dispatch({
              type:"firstName",
              nextFirstName:e.target.value
             })
             }
             className="input--element"
             ></input>
           </div>

           <div className="input--element--outer--div--tag">
          <label className="text-white">Last Name:</label>
          <input
             type="text"
             name="lastName"
             onChange={(e)=>dispatch({
              type:"lastName",
              nextLastName:e.target.value
             })}
             className="input--element"
             ></input>
           </div>

           <div className="input--element--outer--div--tag">
          <label className="text-white">LinkedIn URL:</label>
          <input
             type="url"
             name="linkedInUrl"
             onChange={(e)=> dispatch({
              type:"linkedInUrl",
              nextLinkedInUrl:e.target.value
             })}
             className="input--element"
             ></input>
           </div>

         <div className="input--element--outer--div--tag">
         <label className="text-white">Password : </label>
          <input
             type="password"
             name="password"
             onChange={(e)=> dispatch({
              type:"password",
              nextPassword:e.target.value
             })}
             className="input--element"
             ></input>
             </div>

             <div className="input--element--outer--div--tag">
          <label className="text-white">Confirmation Password:</label>
          <input
             type="password"
             name="confirmPassword"
             onChange={(e)=>dispatch({
              type:"confirmPassword",
              nextConfirmPassword:e.target.value
             })
             }
             className="input--element"
             ></input>
           </div>
          <input
          value="Submit"
          type="submit"
          
          className="input--element--button"
          >
          </input>
    </form>
        </div>
    </div>
  )
}
