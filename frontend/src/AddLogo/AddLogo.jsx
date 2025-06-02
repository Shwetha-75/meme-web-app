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
// const Item =styled.div`
//    display:flex;
// `
export default function AddLogo({handleOnAddLogo,onImage}) {

  const {dataImageTag}=React.useContext(DataImageTag);

  const handleOnClickTextBox = ()=>{
    let temp=nanoid();
       handleOnAddLogo({
            id:temp,
            value:'',
            x_position:0,
            y_position:0,
            title:`Logo ${dataImageTag.length+1}`,
            status:false
      })
  }
console.log(dataImageTag)
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
      {/* <Panel  className="flex flex-col gap-[0.6rem]">
          {dataImageTag.map((item)=>
              <Panel
              className="flex flex-row justify-center items-center">
              <Item className="  w-[40%] text-center">
                {item.title}
              </Item>
              <Item className="relative w-[50%] flex justify-center items-center text-center">
                <span className="absolute z-0"> 
                 Change the logo
               
                </span>
                <input
                type="file"
                className="relative text-white border border-slate-500"
                 onChange={(e)=>{
                   const file = e.target.files[0];
                  if (file) {
                  const blobUrl = URL.createObjectURL(file)
                  onImage(item.id,blobUrl)
                  }
                
                }}
                />
              </Item>
              </Panel>
          )}
      </Panel> */}
   
    </Container>
  )
}
