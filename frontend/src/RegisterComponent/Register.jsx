import React from 'react'
import { Status } from '../App';
export default function Register() {

  const {status}=React.useContext(Status)

  return (
    <div className={`overlay--display--register `}>
        <title>Register Page</title>
        <div className="register---display---tag flex flex-col items-center gap-3">

          <div className="input--element--outer--div--tag">
          <label className="text-white">User Name:</label>
          <input
             type="text"
             className="input--element"
             ></input>
           </div>
         
         <div className="input--element--outer--div--tag">
         <label className="text-white">Password : </label>
          <input
             type="text"
             className="input--element"
             ></input>
             </div>
          <input
          value="Submit"
          type="submit"

          className="input--element--button"
          >
          </input>
        </div>
    </div>
  )
}
