import React from "react";
// import MainComponent from "./Component/MainComponent";
import Firebase from "./firebase";
// import Main from "./MainComponent/Main";
// import LandingPoppUpDisplay from "./PoppUpDisplayComponent/LandingPoppUpDisplay";
import LandingPage from "./LandingComponent/LandingPage";
import LoginMain from "./AuthenticatedLandingComponent/Index";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

export const SelectedImage=React.createContext(null);
export const MemeGenerate=React.createContext(false);
export const ConstraintsRef=React.createContext(null);
export const ImageRef=React.createContext(null);
export const Data=React.createContext(null);
export const Status=React.createContext(null);
export const RegistrationStatus= React.createContext(false);
export const UserStatus = React.createContext(false);

function App() {

  const [memeImage,setMemeImage]=React.useState(false);
  const constraintsRef=React.useRef(null);
  const [userStatus,setUserStatus] = React.useState(JSON.parse(localStorage.getItem('userStatus')) || false);
  const imageRef=React.useRef(null);
  const [data,setData]=React.useState(JSON.parse(localStorage.getItem('data'))||[]);
  const [registerStatus,setRegisterStatus]=React.useState(true);
  const [status,setStatus]=React.useState(false)

React.useEffect(()=>{
  localStorage.setItem("data",JSON.stringify(data));
  localStorage.setItem("imageRef",JSON.stringify(imageRef));
  localStorage.setItem('userStatus',JSON.stringify(userStatus));

});



// React.useEffect(()=>{
//   const timeId=setTimeout(()=>{
//     setRegisterStatus(true);
//     setStatus(true)
//   },5000);

//   return ()=>clearTimeout(timeId)
// },[])

  return (
    <>
     <StyleSheetManager shouldForwardProp={isPropValid}>

    <UserStatus.Provider value={{userStatus,setUserStatus}}>
    <MemeGenerate.Provider value={{memeImage,setMemeImage}} >
    <ConstraintsRef.Provider value={{constraintsRef}}>
    <ImageRef.Provider value={{imageRef}}>
    <Data.Provider value={{data,setData}}>
    <Status.Provider value={{status,setStatus}}>
    <RegistrationStatus.Provider value={{registerStatus,setRegisterStatus}}>
    
      <BrowserRouter>
      <Routes>
           <Route path="/" element={userStatus ? <LoginMain/>:<LandingPage/>}></Route>
          
      </Routes>
      </BrowserRouter>
      {/* <Main/> */}
      {/* <MainComponent/> */}
      {/* {registerStatus && <LandingPoppUpDisplay/>} */}
   
     
    </RegistrationStatus.Provider>
    </Status.Provider>
    </Data.Provider>
    </ImageRef.Provider>
    </ConstraintsRef.Provider>
    </MemeGenerate.Provider>
    </UserStatus.Provider>
    <Firebase/>
     </StyleSheetManager>
    </>
  );
}

export default App;
