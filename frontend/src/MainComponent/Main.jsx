import React from 'react';
import NavigationBar from './NavigationBar';
// import { MemeGenerate } from '../App';
import PoppUpDisplay from './PoppUpDisplay';
export default function Main() {

  const [menuBarStatus,setMenuBarStatus]=React.useState(JSON.parse(localStorage.getItem("menuBarStatus")) ||false);

  const updateCloseIcon=()=>setMenuBarStatus(prev=>!prev)
  React.useEffect(()=>{
     localStorage.setItem("menuBarStatus",JSON.stringify(menuBarStatus))
  });


  return (
    <>
          <NavigationBar
          updateCloseIcon={updateCloseIcon}
          />
          <div className={`overlay--poppup--display ${menuBarStatus?"active":"deactive"}`}>
             <PoppUpDisplay 
            updateCloseIcon={updateCloseIcon}
            menuBarStatus={menuBarStatus}
            />
          </div>
          <div className="p-10 ml-[5%] flex w-[90%] ">
         <div className=" w-[50%] p-2">
            
          </div>
      
          <div className=" w-[50%] p-2">
            
          </div>
          </div>
    </>
  )
}
