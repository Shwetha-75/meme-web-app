import styled from "styled-components"
import AddTag from "../AddTextBoxComponent/AddTag"
import SearchMenuBarComponent from "../SearchMenuBarComponent/SearchMenuBarComponent"
import "./AddMenuBar.css";
import AddLogo from "../AddLogo/AddLogo";

import  AddTextBoxEditOptions from "./AddTextBoxEditOptions";
import AddLogoEditOptions from "./AddLogoEditOptions";
const Container = styled.div`
     display:flex;
     flex-direction:column;
     margin-top:-30px;
`
const Panel = styled.div`
    
`
export default function AddMenuBar({handleOnClick,handleOnAddLogo}) {
      
 

  return (
    <Container  className="w-[100%] flex flex-col gap-[1.2rem]">
      <Panel  className="">
       <SearchMenuBarComponent/>
        </Panel>
       <Panel  className='w-[100%] options--tag--menu--bar flex flex-col gap-[0.6rem]'>
      
        <Panel
        className='w-[98%]'>
        <AddTag
           handleOnClick={handleOnClick}  />
        </Panel>

          <Panel className='w-[98%]'>
             <AddTextBoxEditOptions/>
          </Panel>
          
        <Panel 
        className='w-[98%]'>
        <AddLogo
        handleOnAddLogo={handleOnAddLogo}
     
        />
        </Panel>
        <Panel  className='w-[98%]'>
             <AddLogoEditOptions/>
         </Panel>
 
        </Panel> 

    </Container>
  )
}
