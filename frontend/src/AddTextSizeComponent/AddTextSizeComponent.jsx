import React from "react";
import EditFontSize from "../EditMemeComponent/EditFontSize";
import styled from "styled-components"
import "./AddTextSize.css";

const Container = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   width:100%;
`
export default function AddTextSizeComponent(){
    const {editFontSize,setEditFontSize} = React.useContext(EditFontSize);

    return(
        <Container className="p-2">
        <label className="p-3">Text Font Size : {editFontSize}</label>
        <input
            type="range"
            value={editFontSize}
            max="50"
            min="1"
            name="editFontSize"
            className="input--tag--range w-[100%]"
            onChange={(e)=>setEditFontSize(e.target.value)}
        />
            
        </Container>
    )
}