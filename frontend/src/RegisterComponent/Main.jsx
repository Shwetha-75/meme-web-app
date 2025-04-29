import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
function reducer(state,action){
    switch(action.type){
        case "username": return{
               ...state,
               username:action.nextUserName
        }
        case "email": return{
              ...state,
              email:action.nextEmail
        }

        case "password": return {
            ...state,
            password:action.nextPassword
        }

        case "confirmPassword": return {
              ...state,
              confirmPassword: action.nextConfirmPassword
        }
        default : return {...state}
    }
}

const Container = styled.div`
    width:100%;
    
`

export default function Main() {
  
    const [state,dispatch] = React.useReducer(reducer,{
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    })


  return (
    <Container>

      <div className="div--tag--register--email">
      <ArrowBackIcon fontSize='medium' color='primary'/>
      </div>
      <div className="form---tag---register">
      <div className="label--tag--email-register"><label className=''>Email</label></div>
      <div className='input--email--container'>

        <input
        type="text"
        name="username"
        autoComplete='off'
        autoFocus="on"
        className="input--tag--register--email"
        value={state.username}
        onChange={(e)=>dispatch({
          type:"username",
          nextUserName:e.target.value
        })}
        />
        <span className="focus-border"></span>
        <i></i>
        </div>
        
       
       <br></br>
   
      <div className='btn--tag--register--div' >

      <button className="btn--tag--register">Cancel</button>
   
      <button className="btn--tag--register">Continue</button>
      </div>
        </div>
      
    </Container>
  )
}
