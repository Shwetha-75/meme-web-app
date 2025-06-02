import styled from "styled-components"
import { nanoid } from 'nanoid';
import "./addTextBox.css";
import AddIcon from '@mui/icons-material/Add';
// import Data from "../EditMemeComponent/Data";
import React from "react";

const Container = styled.div`
   display:flex;
   flex-direction:row;
`
const Panel = styled.div`
    
`
export default function AddTag({handleOnClick}) {

  const handleOnClickTextBox = ()=>{
    let temp=nanoid();
    let object={
            id:temp,
            value:'',
            x_position:0,
            y_position:0,
            status:false,
            textBoxDisplay:true,
            editTextBoxColor:'white',
            editTextBoxSize:'2',
            chooseTextColor:'white',
            editFontSize:'16',
            fontFamily:'',
            
      }
       handleOnClick({...object})
  };

  // const {data}=React.useContext(Data);


  return (
    <>
    <Container className="w-[100%] flex flex-row justify-between p-2">
        <Panel className="">
          Add Text Box
         </Panel>
         <Panel>
          <span
             onClick={handleOnClickTextBox}
             className="cursor-pointer">
            <AddIcon fontSize="small"/>
          </span>
      </Panel>
    </Container>
    </>
  )
}
