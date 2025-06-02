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
import React from "react";
import Data from "../EditMemeComponent/Data"
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
     const {data,setData}=React.useContext(Data);
      const handleOnChangeOnImage=(id,image)=>{
       setDataImageTag(dataImageTag.map((item)=>
           item.id ===id ?
           {
              ...item,
              value:image
           }: {...item}
           
           
      ))
   } 
   
   const onChangeTextBoxDisplay=(id)=>{
         setData(data.map((item)=>
               item.id===id ?
               {
                  ...item,
                  textBoxDisplay:!item.textBoxDisplay
               } : {...item}
        ))
   };
  const onChangeEditTextBoxColor=(id,color)=>{
      setData(data.map((item)=>
           item.id===id ?{
              ...item,
              editTextBoxColor:color
           }:{...item}
      ))
  }
  const onChangeEditTextBoxSize=(id,size)=>{
       setData(data.map((item)=>
         item.id===id ? {
            ...item,
            editTextBoxSize:size
         } : {...item}
      ))
  }

  const onChangeChooseTextColor = (id,color)=>{
      setData(data.map((item)=>
          item.id===id ? {
            ...item,
            chooseTextColor:color
          } : {...item}
       ))
  };

  const onChangeEditFontSize =(id,size)=>{
      setData(data.map((item)=>
         item.id===id ?{
            ...item,
           editFontSize:size
         } : {...item}
      ))
  }

  const onChangeFontFamily = (id,font)=>{
     setData(data.map((item)=>
       item.id===id? {
           ...item,
           fontFamily:font
       }:{...item}
    ))
  }
  return (
    <Container  className="w-[100%] flex flex-col gap-[1.2rem]">
      <Panel  className="">
       <SearchMenuBarComponent/>
        </Panel>
       <Panel  className='w-[100%] options--tag--menu--bar flex flex-col gap-[2rem]'>

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
        className='w-[98%]'>
        <AddTag
           handleOnClick={handleOnClick}  />
        </Panel>

          <Panel className='w-[98%]'>
             {data?.map((item,index)=>
              <AddTextBoxComponent
                id={item.id}
                index={index}
                textBoxDisplay={item.textBoxDisplay}
                onChangeTextBoxDisplay={onChangeTextBoxDisplay}
                editTextBoxColor={item.editTextBoxColor}
                onChangeEditTextBoxColor={onChangeEditTextBoxColor}
                editTextBoxSize={item.editTextBoxSize} 
                onChangeEditTextBoxSize={onChangeEditTextBoxSize}
                chooseTextColor={item.chooseTextColor}
                onChangeChooseTextColor={onChangeChooseTextColor}
                editFontSize={item.editFontSize}
                onChangeEditFontSize={onChangeEditFontSize}
                fontFamily={item.fontFamily}
                onChangeFontFamily={onChangeFontFamily}
              />
            )}
          </Panel>
          
        <Panel 
        className='w-[98%]'>
        <AddLogo
        handleOnAddLogo={handleOnAddLogo}
        onImage={handleOnChangeOnImage}
        />
        </Panel>
 
        </Panel> 

    </Container>
  )
}
