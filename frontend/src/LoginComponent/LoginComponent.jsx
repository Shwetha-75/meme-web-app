import React from 'react'
import { axiosLogin } from '../AxiosComponent/AxiosComponent';
import { RegistrationStatus } from '../App';

function reducer(state,action){
    switch(action.type){
        case "email": return{
            ...state,
            email:action.nextEmail
        }

        case "password": return {
            ...state,
            password:action.nextPassword
        }

        default: return {...state}
    }
}

export default function LoginComponent() {

const [state,dispatch] = React.useReducer(reducer,{
    email:"",
    password:""
});

const {setRegisterStatus} = React.useContext(RegistrationStatus);
const[loginStatus,setLoginStatus]=React.useState(false);


const handleOnSubmit=async(e)=>{
    e.preventDefault();

    try {

        const formData = new FormData()
        formData.append("email",state.email);
        formData.append("password",state.password);
        console.log(formData)
        const response = await axiosLogin.post("/login",formData,{
            headers:{
                "Content-Type":'application/json'
            }
        });
        let data= response.data;
        if(data.status === 'ok'){
            setRegisterStatus(false)
        }
        else{
            setLoginStatus(true)
        }
    } catch(error){
        console.log(error)
    }


}
  return (
  <>
  <form onSubmit={handleOnSubmit}>
    

  <div className="input--element--outer--div--tag">
          <label className="text-white">Email:</label>
          <input
             type="email"
             value={state.email||""}
             name="email"
              onChange={(e)=>dispatch(
                  {
                  type:"email",
                  nextEmail:e.target.value
               }
              )} 
             className="input--element"
             ></input>
           </div>

           {/* ------------------------ */}

           <div className="input--element--outer--div--tag">
          <label className="text-white">Password:</label>
          <input
             type="password"
             value={state.password||""}
             name="password"
             onChange={(e)=>dispatch(
               {
                  type:"password",
                  nextPassword:e.target.value
               }
              )} 
             className="input--element"
             ></input>
           </div>

           <input
          value="Submit"
          type="submit"
          className="input--element--button">
          </input>
          
    </form>
     {loginStatus && <h3>Invalid Credentials</h3>}
     </> 

  )
}
