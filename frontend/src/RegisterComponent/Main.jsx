import React from 'react'

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

export default function Main() {
  
    const [state,dispatch] = React.useReducer(reducer,{
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    })

   console.log(state)

  return (
    <>
      <div className="form---tag---register">
      <div className="div--tag--outer--register">
      <label className='label--tag--register'>Email</label> 
        <input
        type="text"
        name="username"
        autoComplete='off'
        autoFocus="on"
        className="input--tag--register"
        value={state.username}
        onChange={(e)=>dispatch({
          type:"username",
          nextUserName:e.target.value
        })}
        />
        </div>
       
       <br></br>
       <div className="div--tag--outer--register">
       <label className='label--tag--register'>Password</label>  
        <input
        type="password"
        name="password"
        autoComplete='new-password'
        className="input--tag--register"
        value={state.password}
        onChange={(e)=>dispatch({
          type:"password",
          nextPassword:e.target.value 
        })}
        />
        </div>
        <br></br>
        <div className="div--tag--outer--register">
        <label className='label--tag--register'>Confirm Password</label> 
        <input
         type="password"
         autoComplete='new-password'
         name="confirmPassword"
         className="input--tag--register"
         onChange={(e)=>dispatch({
           type:"confirmPassword",
           nextConfirmPassword:e.target.value 
          })}
          />
          </div>
        <br></br>
       
      </div>
    </>
  )
}
