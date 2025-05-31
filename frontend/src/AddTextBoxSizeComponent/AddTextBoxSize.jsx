import React from "react";
import EditTextBoxSize from "../EditMemeComponent/EditTextBoxSize";
import styled from "styled-components"
import "./AddTextBoxSize.css"

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

`
export default function AddTextBoxSize() {

  const {editTextBoxSize,setEditTextBoxSize} = React.useContext(EditTextBoxSize);


  return (
    <Container className="w-[100%] p-2  ">
    <label className="text-white p-3">
     Text Box Size : {editTextBoxSize}
    </label>
      <input
      type="range"
      value={editTextBoxSize}
      name="editTextBoxSize"
      min="1"
      max="10"
      className="text-white input--tag--range w-[100%]"
      onChange={(e)=>setEditTextBoxSize(e.target.value)}
      />
    </Container>
  )
}
