import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-regular-svg-icons'
// import PoppUpDisplay from './PoppUpDisplay';

export default function NavigationBar({updateCloseIcon}) {

  
  return (
    <>
    <div  className='p-10 navigation--bar--tag'>
      <div className="w-[100%] flex justify-between ">
       <div  className=''>
        <h1 className='text-white font-bold text-[1.3rem] cursor-pointer logo--tag'>It's Meme</h1>
       </div>

          <div  className='p-2 cursor-pointer'>
            <p className="menu--tag"
            onClick={updateCloseIcon}>Menu</p>
          </div>
      </div>
        
    </div>
 
    </>
  )
}
