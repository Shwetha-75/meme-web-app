import React from 'react'
import Main from '../Main/Main'
export default function LandingPage() {
  return (
    <div  className="flex h-screen items-center justify-center gap-[6rem]">
      <>
     <h1 className="
     header--tag--main--page
     text-white">Meme Generator</h1>
     </>
     {/* <div className="divider--tag--main">

     </div> */}

     <div className="form--tag--main">
      
      <Main/>
      {/* <Password/> */}
      
      {/* <button className="btn--tag--main">Register</button> */}
     </div>
    </div>
  )
}
