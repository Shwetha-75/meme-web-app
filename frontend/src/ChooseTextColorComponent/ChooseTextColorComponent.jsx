import React from 'react'
import ChooseTextColor from '../EditMemeComponent/ChooseTextColor'
import styled from "styled-components";
import "./choosetextcolor.css"

const Item = styled.div`
   display:flex;
`
const Container = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   `
export default function ChooseTextColorComponent() {

  const {chooseTextColor,setChooseTextColor}= React.useContext(ChooseTextColor);

  return (
    <Container>
        <label className="text-center ">Choose the Text Color</label>
    <Item>
       <input
          type="text"
          className="color--text--tag text-center"
          name="editTextBoxColor"
          value={chooseTextColor}
          onChange={(e)=>{setChooseTextColor(e.target.value)}}
          />
    <Item className="cp_wrapper">
       <input
        type="color"
        value={"#8888ff"||chooseTextColor}
        name="chooseTextColor"
        onChange={(e)=>setChooseTextColor(e.target.value)}
        
        />
    </Item>
    </Item>
    </Container>
  )
}
