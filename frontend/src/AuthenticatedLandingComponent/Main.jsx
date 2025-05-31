import React from 'react'
import styled from 'styled-components';
import MemeMain from '../MemeComponent/MemeMain';
// import MainComponent from "../Component/MainComponent";
import NavigationBar from '../NavigationBar/NavigationBar';

const Container = styled.div`
    width:98%;
      display:flex;
      flex-direction:column;
      height:100vh;
      gap:1rem

`
const Panel = styled.div`
    
      flex:${props=>props.weight}
`;

export default function Main() {
 
  return (
    <Container
    className=''
    >
        {/* <h1 className='text-white'>Logged In SuccessFully</h1>
        <h1 className="text-white cursor-pointer"
          onClick={()=>setUserStatus(prev=>!prev)}
        >Log Out</h1> */}

           {/*Menu   */}
           <Panel weight={2}
           className="flex justify-center items-center"
           >
            <NavigationBar/>

           </Panel>

            <Panel weight={4}
            className=""
            style={{
     
              height:'80%',
              
            }}
            >
            <MemeMain/>
            </Panel>
           
        {/* <MainComponent/> */}
    </Container>
  )
}
