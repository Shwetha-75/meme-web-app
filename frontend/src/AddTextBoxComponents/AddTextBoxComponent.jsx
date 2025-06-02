import styled from "styled-components";
import AddColorToTextBox from "../AddColorToTextBoxComponent/AddColorToTextBox";
import AddFontFamilyComponent from "../AddFontFamilyComponent/AddFontFamilyComponent";
import AddTextBoxSize from "../AddTextBoxSizeComponent/AddTextBoxSize";
import AddTextSizeComponent from '../AddTextSizeComponent/AddTextSizeComponent';
import ChooseTextColorComponent from "../ChooseTextColorComponent/ChooseTextColorComponent"
import React from "react";
import "./addtextBoxComponent.css";
import EditIcon from '@mui/icons-material/Edit';

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
    onChangeFontFamily
}) {

  // const [textBoxDisplay,setTextBoxDisplay]=React.useState(true);
   
  // const handleOnClick=()=>{
  //     setTextBoxDisplay(prev=>!prev)
  // }
  return (
    <Container className={`flex flex-col ${index>0?"mt-[5%]":""} `}>
        <Panel  className="p-2 flex justify-between">
            <Item className="text-center">
              Text Box {index+1}
            </Item>
            <Item className="cursor-pointer">
             { textBoxDisplay?
              <>
                <EditIcon
                  size="small"
                  onClick={()=>onChangeTextBoxDisplay(id)} 
                />
              </>
              :
              <>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="24px" 
              viewBox="0 -960 960 960"
              onClick={()=>onChangeTextBoxDisplay(id)} 
              width="20px" 
              fill="#FFFFFF">
              <path d="M240-440v-80h480v80H240Z"/></svg>
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
