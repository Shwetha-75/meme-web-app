// import React from "react";
// import EditTextBoxColor from "../EditMemeComponent/EditTextBoxColor";
// import FontFamily from "../EditMemeComponent/FontFamily";
import styled from "styled-components";
import "./addcolor.css";
// import data from "../AddFontFamilyComponent/data.json";

const Item = styled.div`
      
`
const Panel = styled.div`
    
`

const Container = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
`
const AddColorToTextBox = ({
  id,
  editTextBoxColor,
  onChangeEditTextBoxColor
  }) => {

  // const { editTextBoxColor, setEditTextBoxColor } = React.useContext(EditTextBoxColor);
  // const {setFontFamily} = React.useContext(FontFamily);
  return (
    <>
      <Container className='p-2'>
        <Panel className="flex flex-row w-[100%] gap-[2rem]">
          <Item >
            <label className="text-left w-[40%]">Choose Color : </label>
          </Item>
          <Item className="w-[35%] h-[30px] flex flex-col  justify-center items-center">
            <input
              className="cursor-pointer w-[100%] h-[100%] p-0"
              type="color"
              name="editTextBoxColor"
              value={editTextBoxColor}
              onChange={(e) => { onChangeEditTextBoxColor(id,e.target.value) }}
            />
          </Item>
        </Panel>
        <Panel className="w-[100%]  mt-[8%]">
        <Item>
          <input
            type="text"
            placeholder="Enter the color in hex, text, any...."
            className="color--text--tag text-center w-[100%]"
            name="editTextBoxColor"
            value={editTextBoxColor}
            onChange={(e) => { onChangeEditTextBoxColor(id,e.target.value) }}
          />
        </Item>
        </Panel>
        {/*  */}
      </Container>
    </>
  )
}

export default AddColorToTextBox;