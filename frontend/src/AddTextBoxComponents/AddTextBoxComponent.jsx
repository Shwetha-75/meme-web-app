import styled from "styled-components";
import AddColorToTextBox from "../AddColorToTextBoxComponent/AddColorToTextBox";
import AddFontFamilyComponent from "../AddFontFamilyComponent/AddFontFamilyComponent";
import AddTextBoxSize from "../AddTextBoxSizeComponent/AddTextBoxSize";
import AddTextSizeComponent from '../AddTextSizeComponent/AddTextSizeComponent';
import ChooseTextColorComponent from "../ChooseTextColorComponent/ChooseTextColorComponent"
import React from "react";
import "./addtextBoxComponent.css";


const Container = styled.div`
   display:flex
`
const Panel = styled.div`
   
`
const Item = styled.div`

`
export default function AddTextBoxComponent({
    id,
    index,
    textBoxDisplay,
    onChangeTextBoxDisplay,
    editTextBoxColor,
    onChangeEditTextBoxColor,
    editTextBoxSize,
    onChangeEditTextBoxSize,
    chooseTextColor,
    onChangeChooseTextColor,
    editFontSize,
    onChangeEditFontSize,
    fontFamily,
    onRemove,
    onChangeFontFamily
}) {

  // const [textBoxDisplay,setTextBoxDisplay]=React.useState(true);
   
  // const handleOnClick=()=>{
  //     setTextBoxDisplay(prev=>!prev)
  // }
  
  return (
    <Container className={`flex flex-col ${index>0?"mt-[5%]":"mt-[0]"} `}>
        <Panel  className="p-2 flex justify-between">
            <Item className="text-center">
              Text Box {index+1}
            </Item>
            <Item className="cursor-pointer">
             { textBoxDisplay?
              <>
              <span className="flex gap-[0.8rem]">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="22px" 
              viewBox="0 -960 960 960" 
              width="18px" 
              onClick={()=>onChangeTextBoxDisplay(id)} 
              fill="#FFFFFF">
                <path 
                d="M200-200h57l391-391-57-57-391 
                391v57Zm-80 80v-170l528-527q12-11 
                26.5-17t30.5-6q16 0 31 6t26 
                18l55 56q12 11 17.5 26t5.5 
                30q0 16-5.5 
                30.5T817-647L290-120H120Zm640-584-56-56 
                56 56Zm-141 85-28-29 57 57-29-28Z"/>
              </svg>
                
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="20px" 
                viewBox="0 -960 960 960" 
                width="18px"
                onClick={()=>onRemove(id)} 
                fill="#FFFFFF">
                  <path 
                  d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 
                  33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 
                  0h80v-360h-80v360ZM280-720v520-520Z"/>
                </svg>
                </span>
              </>
              :
              <>
              <span className="flex gap-[0.8rem]">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="24px" 
              viewBox="0 -960 960 960"
              onClick={()=>onChangeTextBoxDisplay(id)} 
              width="18px" 
              fill="#FFFFFF">
              <path d="M240-440v-80h480v80H240Z"/></svg>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="20px" 
              viewBox="0 -960 960 960" 
              width="18px"
              onClick={()=>onRemove(id)} 
              fill="#FFFFFF">
                <path 
                d="M280-120q-33 
                0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 
                33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 
                0h80v-360h-80v360ZM280-720v520-520Z"/>
              </svg>
              </span>
              </>
              }
            </Item>
        </Panel>
      <Panel className={`overflow-hidden ${textBoxDisplay?"text--box--display":"text--box--display--active"}`}>
         <Panel className={`text-left p-2 text-slate-400 mt-[2%]`}>Edit Text Box</Panel>
        <Panel>
         <AddColorToTextBox
         id={id}
         editTextBoxColor={editTextBoxColor}
         onChangeEditTextBoxColor={onChangeEditTextBoxColor}
         />
        </Panel>
        <Panel>
          <AddTextBoxSize
          id={id}
          editTextBoxSize={editTextBoxSize}
          onChangeEditTextBoxSize={ onChangeEditTextBoxSize}
          />
        </Panel>
         <Panel className="text-left p-2 text-slate-400 mt-[2%]">Edit Font</Panel>
        <Panel>
         <ChooseTextColorComponent
         id={id}
         chooseTextColor={chooseTextColor}
         onChangeChooseTextColor={onChangeChooseTextColor}
         />
        </Panel>
        <Panel>
        <AddTextSizeComponent
        id={id}
              editFontSize={editFontSize}
              onChangeEditFontSize={onChangeEditFontSize}
        />
        </Panel>
        <Panel>
        <AddFontFamilyComponent
        id={id}
        fontFamily={fontFamily}
        onChangeFontFamily={onChangeFontFamily}
        />
        </Panel>
      </Panel>

    </Container>
  )
}
