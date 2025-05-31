import React, { createContext } from 'react'
import "../RegisterComponent/register.css"
import RegisterPage from "../RegisterComponent/Register"
import Google from "../media/google.png"
import LoginPage from "../LoginComponent/Main"

export const RegisterStatus = createContext(null);
export const MainStatus = createContext(null);
export const LoginStatus = createContext(null);

export default function Register() {
  const [registerStatus, setRegisterStatus] = React.useState(false);
  const [mainStatus, setMainStatus] = React.useState(true)
  const [loginStatus,setLoginStatus] = React.useState(false);

  return (
    <MainStatus.Provider value={{ mainStatus, setMainStatus }}>
      <RegisterStatus.Provider value={{ registerStatus, setRegisterStatus }}>
      
          <LoginStatus.Provider value={{loginStatus,setLoginStatus}}>

          {mainStatus && <div className="authentication--services--tag">
            <ul>
              <li
               onClick={()=>{
                setRegisterStatus(true)
                setMainStatus(false)
               }}
               >Register</li>
              <li
              onClick={()=>{
                setLoginStatus(true)
                setMainStatus(false)
              }}
              >Login</li>
              <li className='flex justify-center items-center'> <p>Continue with </p>
                <p className='w-2'></p>
              <p className='flex'><img className="google--image--tag" src={Google} alt="" />oogle</p></li>
              <li className='flex justify-center items-center'>
                <p>Continue with</p>
                <p className="w-2"></p>
                 <p className='text-blue-500'>LinkedIn</p>
                 
                 </li>
            </ul>
          </div>}
          {registerStatus &&
            <RegisterPage />}
            { loginStatus && <LoginPage/>}
           
            </LoginStatus.Provider>
    
      </RegisterStatus.Provider>
    </MainStatus.Provider >
  )
}
