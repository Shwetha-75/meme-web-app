import React from 'react'
import { RegisterData } from './Register'
export default function Password() {
   
 const {state,dispatch} = React.useContext(RegisterData)

  return (
    <>
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
          <label className="text-white">Confirm Password:</label>
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
          

    </>
  )
}
