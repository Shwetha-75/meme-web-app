import React from 'react'
// import { RegisterData } from './Register'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
import "./register.css";
import { RegisterStatus,PasswordStatus } from './Register';


const Container = styled.div`
    width:100%;
    
`

export default function Password() {
   
//  const {state,dispatch} = React.useContext(RegisterData)
  
const [toggleText,setToggleText] = React.useState(false);
const [toggleConfirmText,setToggleConfirmText]=React.useState(false);


const handleTogglePassword = ()=>{
   setToggleText(prev=>!prev)
}
 
const handleToggleConfirmPassword=()=>{
 setToggleConfirmText(prev=>!prev)
}

const {setRegisterStatus} = React.useContext(RegisterStatus);
const {setPasswordStatus} = React.useContext(PasswordStatus);

  return (
    <Container>

    <div className="div--tag--register--email">
    <ArrowBackIcon 
    className="cursor-pointer"
    fontSize='medium' color='primary'
    onClick={()=>{
      setPasswordStatus(false)
      setRegisterStatus(true)
    }}
    />
    </div>
    <div className="form---tag---register">
    <div className="label--tag--email-register"><label className=''>Password </label></div>
    <div className='input--email--container relative'>

    <input
   
      type={toggleText?'password':'text'}
      name="password"
      
      
      className="input--tag--register--email"
      // value={state.username}
      // onChange={(e)=>dispatch({
      //   type:"email",
      //   nextEmail:e.target.value
      // })}
      autoComplete='current-password'
      />
      <span 
      style={{zIndex:10,pointerEvents:'auto',cursor:'pointer'}}
      onClick={handleTogglePassword}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-white">{toggleText?"Show":"Hide"}</span>
      <span className="focus-border"></span>
      <i></i>
      </div>

      {/* -------------------------- */}
      
      <div className="label--tag--email-register"><label className=''>Confirm Password</label></div>
    <div className='input--email--container'>

      <input
      type={toggleConfirmText?"password":"text"}
      name="confirm_password"
   
      className="input--tag--register--email"
      // value={state.username}
      // onChange={(e)=>dispatch({
      //   type:"email",
      //   nextEmail:e.target.value
      // })}
      autoComplete="current-password"
      />
      <span 
       style={{zIndex:10,pointerEvents:'auto',cursor:'pointer'}}
       onClick={handleToggleConfirmPassword}
      className='absolute right-4 top-1/2 -translate-y-1/2 text-white'>{toggleConfirmText?"Show":"Hide"}</span>
      <span className="focus-border"></span>
      <i></i>
      </div>
     
     <br></br>
 
    <div className='btn--tag--register--div' >

    <button className="btn--tag--register">Cancel</button>
 
    <button className="btn--tag--register">Save</button>
    </div>
      </div>
    
  </Container>
  )
}
