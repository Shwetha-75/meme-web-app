import styled from "styled-components"
import { nanoid } from 'nanoid';
import AddIcon from '@mui/icons-material/Add';
import DataImageTag from "../DataImageTag";
import React from "react"

import "./AddLogo.css"
// const Button = styled.button`
    
// `
const Panel = styled.div`
   
     
`
const Container = styled.div`
   display:flex;
   flex-direction:row;

`
export default function AddLogo({handleOnAddLogo}) {


  const handleOnClickTextBox = ()=>{
    let temp=nanoid();
       handleOnAddLogo({
            id:temp,
            value:'',
            x_position:0,
            y_position:0,
           
            status:false,
            logoBoxDisplay:true,
            editLogoBoxColor:'white',
            editLogoBoxSize:'2',
      })
  }

  return (
    <Container className="w-[100%] flex flex-row  justify-between p-2">
      <Panel className="">
          Add Logo
      </Panel>
      <Panel>
        <span
          onClick={handleOnClickTextBox}
          className="cursor-pointer">
          <AddIcon fontSize="small"/>
        </span>
      </Panel>
     
    </Container>
  )
}
