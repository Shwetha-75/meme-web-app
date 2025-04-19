import React from 'react'
// import { Status } from '../App';
import axios from "axios"
import { RegistrationStatus } from '../App'
import {passwordCriteriaCheck,passwordAndConfirmPassword} from "../PasswordCriteria/Password";

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
      case "githuburl": return {
        ...state,
        "githuburl":action.nextGitHubUrl
      }

      case "password": return {
        ...state,
        "password": action.nextPassword
      }

      case "confirmPassword": return {
        ...state,
        "confirmPassword":action.nextConfirmPassword
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
   linkedInUrl:"",
   githuburl:""
   });

   const [register,setRegister] = React.useState(false);
   const [errorStatus,setErrorStatus]=React.useState('');
   const {setRegisterStatus} = React.useContext(RegistrationStatus);


 const handleOnSubmit=async(e)=>{
    e.preventDefault();
    let result_password_check=passwordCriteriaCheck(state.password)
    if(!result_password_check[0]){
      setErrorStatus(result_password_check[1]);
      setRegister(true);
      return;
    }
    result_password_check=passwordAndConfirmPassword(state.password,state.confirmPassword)
    if(!result_password_check[0]){
      setErrorStatus(result_password_check[1]);
      setRegister(true);
      return ;
    }

try{

  const form = new FormData()
  form.append("userName",state.userName);
  form.append("first_name",state.firstName);
  form.append("last_name",state.lastName);
  form.append("email",state.email);
  form.append("linkedInUrl",state.linkedInUrl);
  form.append("password",state.password);
  form.append("confirm_password",state.confirmPassword);

  
  
    const response = await axios.post("http://localhost:9000/register",form,{
      headers:{
        "Content-Type": "application/json"
      }
    })
     let data = response.data;
     if(data.status === "ok"){
           setRegisterStatus(false)
     }
}  catch(error){
  console.log(error)
}
  
 }

  return (
   <>
      <form onSubmit={handleOnSubmit}>

    
        <div className="input--element--outer--div--tag">
          <label className="text-white">User Name:</label>
          <input
             type="text"
             value={state.userName||""}
             name="userName"
              onChange={(e)=>dispatch(
               {
                  type:"userName",
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
             value={state.email||""}
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
             value={state.firstName||""}
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
             value={state.lastName||""}
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
             value={state.linkedInUrl||""}
             name="linkedInUrl"
             onChange={(e)=> dispatch({
              type:"linkedInUrl",
              nextLinkedInUrl:e.target.value
             })}
             className="input--element"
             ></input>
           </div>


           <div className="input--element--outer--div--tag">
          <label className="text-white">Git Hub URL:</label>
          <input
             type="url"
             value={state.githuburl||""}
             name="githuburl"
             onChange={(e)=> dispatch({
              type:"githuburl",
              nextGitHubUrl:e.target.value
             })}
             className="input--element"
             ></input>
           </div>

         <div className="input--element--outer--div--tag">
         <label className="text-white">Password : </label>
          <input
             type="password"
             value={state.password||""}
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
             value={state.confirmPassword||""}
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
       {
        register && <h3>
              {errorStatus}
        </h3>
       }
    </>   
  )
}
