import React from "react";
import EditTextBoxColor from "../EditMemeComponent/EditTextBoxColor";
import FontFamily from "../EditMemeComponent/FontFamily";
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
const AddColorToTextBox = () => {

  const { editTextBoxColor, setEditTextBoxColor } = React.useContext(EditTextBoxColor);
  const {setFontFamily} = React.useContext(FontFamily);
  return (
    <>
      <Container className='p-2 gap-[1.2rem]'>
        <Panel className="flex flex-row w-[100%] justify-center items-center">
          <Item className="w-[100%]">
            <label className="">Choose Color : </label>
          </Item>
          <Item className="w-[100%] flex flex-col justify-center items-center">
            <input
              className="w-[80%] cursor-pointer"
              type="color"
              name="editTextBoxColor"
              value={editTextBoxColor || "#8888ff"}
              onChange={(e) => { setEditTextBoxColor(e.target.value) }}
            />
          </Item>
        </Panel>
        <Panel className="w-[100%]">
        <Item>
          <input
            type="text"
            className="color--text--tag text-center w-[100%]"
            name="editTextBoxColor"
            value={editTextBoxColor}
            onChange={(e) => { setEditTextBoxColor(e.target.value) }}
          />
        </Item>
        </Panel>
        {/*  */}
      </Container>
    </>
  )
}

export default AddColorToTextBox;