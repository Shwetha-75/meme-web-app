import styled from "styled-components"
import AddTag from "../AddTextBoxComponent/AddTag"
import SearchMenuBarComponent from "../SearchMenuBarComponent/SearchMenuBarComponent"
// import AddColorToTextBox from "../AddColorToTextBoxComponent/AddColorToTextBox"
// import AddTextBoxSize from "../AddTextBoxSizeComponent/AddTextBoxSize"
// import ChooseTextColorComponent from "../ChooseTextColorComponent/ChooseTextColorComponent";
// import AddTextSizeComponent from "../AddTextSizeComponent/AddTextSizeComponent";
import "./AddMenuBar.css";
// import AddIcon from '@mui/icons-material/Add';
// import AddFontFamilyComponent from "../AddFontFamilyComponent/AddFontFamilyComponent";
import AddLogo from "../AddLogo/AddLogo";
// import AddColorToLogoBorder from "../AddColorToLogoComponent/AddColorToLogoBorder"
import React from "react"
import DataImageTag from "../DataImageTag";
import AddTextBoxComponent from "../AddTextBoxComponents/AddTextBoxComponent";

const Container = styled.div`
     display:flex;
     flex-direction:column;
     margin-top:-30px;
`
const Panel = styled.div`
    
`
export default function AddMenuBar({handleOnClick,handleOnAddLogo}) {
      
     const {dataImageTag,setDataImageTag} = React.useContext(DataImageTag);

      const handleOnChangeOnImage=(id,image)=>{
       setDataImageTag(dataImageTag.map((item)=>
           item.id ===id ?
           {
              ...item,
              value:image
           }: {...item}
           
           
      ))
   } 
   
  return (
    <Container  className="w-[100%] flex flex-col gap-[1.2rem]">
      <Panel  className=" p-4">
       <SearchMenuBarComponent/>
        </Panel>
       <Panel  className='max-w-[100%] options--tag--menu--bar flex flex-col gap-[2rem]'>

        {/* <Panel  className="p-5  w-[100%]">
          <AddColorToTextBox/>
        </Panel>
        <Panel className="p-5 w-[100%]">
          <AddTextBoxSize/>
          </Panel>
         <Panel className="">
         </Panel>
         <Panel>
         <AddLogo
         handleOnAddLogo={handleOnAddLogo}
            onImage={handleOnChangeOnImage}
            />
            </Panel>
            <Panel className="">
          <AddTextSizeComponent/>
        </Panel>

        <Panel className="">
        <ChooseTextColorComponent/>
        </Panel>
        <Panel>
        <AddColorToLogoBorder/>
        </Panel>
        <Panel>
           <AddFontFamilyComponent/>
           </Panel> 
           */}
      
        <Panel
        className='w-[100%]'>
        <AddTag
           handleOnClick={handleOnClick}  />
        </Panel>

          <Panel>
            <AddTextBoxComponent/>
          </Panel>
          
        <Panel 
        className='w-[100%]'>
        <AddLogo
        handleOnAddLogo={handleOnAddLogo}
        onImage={handleOnChangeOnImage}
        />
        </Panel>
 
        </Panel> 

    </Container>
  )
}
