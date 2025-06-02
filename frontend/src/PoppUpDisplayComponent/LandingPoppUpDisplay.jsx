import React from 'react'
import Registration from "../RegisterComponent/Register"
import Login from "../LoginComponent/LoginComponent";

export default function LandingPoppUpDisplay() {

const [loginStatus,setLoginStatus]=React.useState(false);

const handleOnClick = ()=>setLoginStatus(!loginStatus);


  return (
    <div className={`overlay--display--register`}>
   
    <div className="register---display---tag flex flex-col items-center gap-3">
     {/* <h3 className='text-white'
      onClick={handleOnClick}>{loginStatus ?"Register":"Login"}</h3> */}
       {!loginStatus && <Registration/>}

       {/* {loginStatus && <Login/>} */}
     </div>

     </div>
  )
}
