import React from "react";
import MainComponent from "./Component/MainComponent";
import Firebase from "./firebase";
import Main from "./MainComponent/Main";
import LandingPoppUpDisplay from "./PoppUpDisplayComponent/LandingPoppUpDisplay";

export const SelectedImage=React.createContext(null);
export const MemeGenerate=React.createContext(false);
export const ConstraintsRef=React.createContext(null);
export const ImageRef=React.createContext(null);
export const Data=React.createContext(null);
export const Status=React.createContext(null);
export const RegistrationStatus= React.createContext(false);


function App() {

  const [memeImage,setMemeImage]=React.useState(false);
  const constraintsRef=React.useRef(null);
  const imageRef=React.useRef(null);
  const [data,setData]=React.useState(JSON.parse(localStorage.getItem('data'))||[]);
  const [registerStatus,setRegisterStatus]=React.useState(false);
  const [status,setStatus]=React.useState(false)

React.useEffect(()=>{
  localStorage.setItem("data",JSON.stringify(data));
  localStorage.setItem("imageRef",JSON.stringify(imageRef))
  // localStorage.setItem("")
});

React.useEffect(()=>{
  const timeId=setTimeout(()=>{
    setRegisterStatus(true);
    setStatus(true)
  },5000);

  return ()=>clearTimeout(timeId)
},[])
  return (
    <>
    <MemeGenerate.Provider value={{memeImage,setMemeImage}} >
     <ConstraintsRef.Provider value={{constraintsRef}}>
    <ImageRef.Provider value={{imageRef}}>
    <Data.Provider value={{data,setData}}>
   <Status.Provider value={{status,setStatus}}>
   <RegistrationStatus.Provider value={{registerStatus,setRegisterStatus}}>
     <Main/>
     <MainComponent/>
   {registerStatus && <LandingPoppUpDisplay/>}
   </RegistrationStatus.Provider>
   </Status.Provider>
    </Data.Provider>

    </ImageRef.Provider>
     </ConstraintsRef.Provider>
    </MemeGenerate.Provider>
    <Firebase/>
    </>
  );
}

export default App;
