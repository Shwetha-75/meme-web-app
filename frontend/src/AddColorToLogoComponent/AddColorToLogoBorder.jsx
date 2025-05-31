import React from 'react'
import styled from "styled-components";
import "./addLogoColor.css"
import EditLogoColor from "../EditMemeComponent/EditLogoColor"
const Item = styled.div`
      display:flex;
`

const Container = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
`

export default function AddColorToLogoBorder() {
  const {editLogoColor,setEditLogoColor} = React.useContext(EditLogoColor);

    return (
      <>
         <Container>
           <label className="text-center ">Choose the Logo Color</label>
          
        <Item>
          <input
          type="text"
          className="color--text--tag text-center"
          name="editTextBoxColor"
          value={editLogoColor}
          onChange={(e)=>{setEditLogoColor(e.target.value)}}
          />
        <Item className="cp_wrapper">
        <input
        className="color--text--box--tag border border-slate-500 cursor-pointer"
        type="color"
         name="editTextBoxColor"
         value={editLogoColor||"#8888ff"}
         onChange={(e)=>{setEditLogoColor(e.target.value)}}
         
         />

        
        </Item>
         </Item>
         </Container>
         </>
    )
}
