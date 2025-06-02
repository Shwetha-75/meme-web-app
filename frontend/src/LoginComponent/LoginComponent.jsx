import React from 'react'
import styled from 'styled-components';
import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./login.css"
import axios from 'axios';
import {MainStatus,LoginStatus} from "../Main/Main";
import { UserStatus } from '../App';
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

const Container = styled.div`
    width:100%;
    
`

export default function LoginComponent() {

const [state,dispatch] = React.useReducer(reducer,{
    email:"",
    password:""
});


const{setLoginStatus}=React.useContext(LoginStatus);
const [toggleText,setToggleText] = React.useState(true);
const {setMainStatus}= React.useContext(MainStatus)
const {setUserStatus} = React.useContext(UserStatus)
const [toggleOverlay,settoggleOverlay] = React.useState(false)


const handleTogglePassword = ()=>{
   setToggleText(prev=>!prev)
}
 

const handleOnSubmitForm =async(e)=>{
  e.preventDefault();
  const formData = new FormData();
  formData.append("email",state.email);
  formData.append("password",state.password);
  settoggleOverlay(prev=>!prev)
   
  try{
    const response =await axios.post("http://localhost:9000/login",formData,{
      headers:{
        'Content-Type': 'application/json'
      }
    });
    if(response.data.status==='true'){

      setTimeout(()=>{
        settoggleOverlay(prev=>!prev)
      },2000);
      setUserStatus(prev=>!prev)
    }

  }catch(error){
    console.log(error)
  }

}

  return (
  <>
    <div  className="login--main--tag">
      <Box
        sx={{
              width: '100%',
              display:toggleOverlay?'block':'none' 
           }}>
        <LinearProgress
          color='#ded5d5bd'
          sx={{
            backgroundColor: '#8e878783',
            height: '1px',
            color: '#ded5d5bd'
          }}
        />
      </Box>
       {/* <Box sx={{ display: 'flex',alignItems:'center',justifyContent:'center'}}>
      <CircularProgress />
    </Box> */}
      <div  className='div---tag---login---overlay'
        style={{
          display:toggleOverlay?'block':'none'
        }}
      ></div>
      <div  className='p-3 top-10'>
      <h1 className='text-center text-[1.8rem] text-white'>SignIn</h1>
      </div>
      <Container className='container--tag--email'>
       
        <div className="div--tag--login--email">
          <ArrowBackIcon
            className="cursor-pointer"
            fontSize='medium' color='primary'
            onClick={() => {
              setMainStatus(true)
              setLoginStatus(false)
            }}
          />
        </div>
        <form onSubmit={handleOnSubmitForm}  method='post' className="form---tag---login">
          
          <div className="label--tag--email-login">
            <label>Email</label>
           </div>
          <div className='input--email--container'>

            <input
              type="email"
              name="email"
              required
              autoComplete='off'
              autoFocus="on"
              className="input--tag--login--email"
              value={state.email}
              onChange={(e) => dispatch({
                      type: "email",
                      nextEmail: e.target.value
                    })}
                  />
            <span className="focus-border"></span>
            <i></i>
          </div>    
    <div className="label--tag--email-login">
      <label>Password</label>
    </div>
    <div className='input--email--container relative'>

    <input
   
      type={toggleText?'password':'text'}
      name="password"
      required
      className="input--tag--login--email"
      value={state.password}
      onChange={(e)=>dispatch({
        type:"password",
        nextPassword:e.target.value
      })}
      autoComplete='current-password'
      
      />
      <span 
      style={{zIndex:1,pointerEvents:'auto',cursor:'pointer'}}
       onClick={handleTogglePassword}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-white">{toggleText?"Show":"Hide"}</span>
      <span className="focus-border"></span>
      <i></i>
      </div>
      
    
          <div className='btn--tag--login--div' >
            {/* <button className="btn--tag--register">Cancel</button> */}
            <button 
            type='submit'
            className="btn--tag--login">
              Login</button>
          </div>
        </form>

      </Container>
    </div>
    </>
  )
}
