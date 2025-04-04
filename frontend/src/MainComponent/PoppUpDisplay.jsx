import React,{memo} from 'react'

function PoppUpDisplay({updateCloseIcon,menuBarStatus}) {

 
  return (
    < >
       <p
       className="text-white font-bold text-[1.2rem] text--display"
       onClick={updateCloseIcon}>
        close
       </p>
       <h1 className='text-white'>hello</h1>
       <h1 className='text-white'>hello</h1>
       <h1 className='text-white'>hello</h1>
       <h1 className='text-white'>hello</h1>
       <h1 className='text-white'>hello</h1>
       <h1 className='text-white'>hello</h1>
       <h1 className='text-white'>hello</h1>
    </>
  )
}


export default memo(PoppUpDisplay)