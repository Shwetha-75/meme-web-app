import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
import { RegisterStatus, MainStatus } from '../Main/Main';
import Box from '@mui/material/Box';
import axios from "axios";
import { UserStatus } from '../App';
import { passwordCriteriaCheck,passwordAndConfirmPassword } from '../PasswordCriteria/Password';
// import CircularProgress from '@mui/material/CircularProgress';
import { LinearProgress } from '@mui/material';
function reducer(state, action) {
  switch (action.type) {

    case "email": return {
      ...state,
      email: action.nextEmail
    }

    case "password": return {
      ...state,
      password: action.nextPassword
    }

    case "confirmPassword": return {
      ...state,
      confirmPassword: action.nextConfirmPassword
    }
    default: return { ...state }
  }
}

const Container = styled.div`
    width:100%;
    
`

export default function Main() {
    
const [toggleText,setToggleText] = React.useState(true);
const [toggleConfirmText,setToggleConfirmText]=React.useState(true);
const [toggleOverlay,settoggleOverlay] = React.useState(false)
const {setUserStatus} = React.useContext(UserStatus);
const handleTogglePassword = ()=>{
   setToggleText(prev=>!prev)
}
 
const handleToggleConfirmPassword=()=>{
 setToggleConfirmText(prev=>!prev)
}

const {setRegisterStatus} = React.useContext(RegisterStatus);


const [state, dispatch] = React.useReducer(reducer, {

    email: "",
    password: "",
    confirmPassword: ""
  });
  
 

  const handleSubmitForm = async(e)=>{
    e.preventDefault()
      const formData = new FormData();
      formData.append("email",state.email);
      formData.append("password",state.password);
      formData.append("confirmPassword",state.confirmPassword);
      let result=passwordCriteriaCheck(state.password);
      console.log(result)
      if(!result[0]){
        console.log("Password should")
        return 
      }
      settoggleOverlay(prev=>!prev)
      result=passwordAndConfirmPassword(state.password,state.confirmPassword)
      if(!result[0]){
        console.log("Both password are not matching")
      }

      try{
          const response = await axios.post("http://localhost:9000/register",formData,{
            headers:{
              "Content-Type":'application/json'
            }
          });
            if(response.data.status==='true'){
              if(response.data['status']==='true')
                {
                  setTimeout(()=>{
      
                    settoggleOverlay(prev=>!prev); 
                  },2000)
                }
                setUserStatus(prev=>!prev)
                
            }
          
          

      }catch(error){
        console.log(error)
      }
  }

const { setMainStatus } = React.useContext(MainStatus)

  return (
    <div  className="register--main--tag">
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
      <div  className='div---tag---register---overlay'
        style={{
          display:toggleOverlay?'block':'none'
        }}
      ></div>
      <div  className='p-3 top-10'>
      <h1 className='text-center text-[1.8rem] text-white'>Register</h1>
      </div>
      <Container className='container--tag--email'>
       
        <div className="div--tag--register--email">
          <ArrowBackIcon
            className="cursor-pointer"
            fontSize='medium' color='primary'
            onClick={() => {
              setRegisterStatus(false)
            
              setMainStatus(true)
            }}
          />
        </div>
        <form  onSubmit = {handleSubmitForm} method='post' className="form---tag---register">
          
          <div className="label--tag--email-register">
            <label>Email</label>
           </div>
          <div className='input--email--container'>

            <input
              type="email"
              name="email"
              required
              autoComplete='off'
              autoFocus="on"
              className="input--tag--register--email"
              value={state.username}
              onChange={(e) => dispatch({
                      type: "email",
                      nextEmail: e.target.value
                    })}
                  />
            <span className="focus-border"></span>
            <i></i>
          </div>    
    <div className="label--tag--email-register">
      <label>Password</label>
    </div>
    <div className='input--email--container relative'>

    <input
   
      type={toggleText?'password':'text'}
      name="password"
      required
      className="input--tag--register--email"
      value={state.username}
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
      
      <div className="label--tag--email-register"><label>Confirm Password</label></div>
      <div className='input--email--container'>

      <input
      type={toggleConfirmText?"password":'text'}
      name="confirmPassword"
      required
      className="input--tag--register--email"
      value={state.confirmPassword}
      onChange={(e)=>dispatch({
        type:"confirmPassword",
        nextConfirmPassword:e.target.value
      })}
      autoComplete="current-password"
      />
      <span 
       style={{zIndex:10,pointerEvents:'auto',cursor:'pointer'}}
       onClick={handleToggleConfirmPassword}
      className='absolute right-4 top-1/2 -translate-y-1/2 text-white'>{toggleConfirmText?"Show":"Hide"}</span>
      <span className="focus-border"></span>
      <i></i>
      </div>  
          <div className='btn--tag--register--div' >
            {/* <button className="btn--tag--register">Cancel</button> */}
            <button 
            type='submit'
            className="btn--tag--register"
                
             
             >
              Register</button>
          </div>
        </form>

      </Container>
    </div>
  )
}
