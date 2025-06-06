import React from "react"
// import FontFamily from "../EditMemeComponent/FontFamily";
import fontStyles from "./data.json";
import styled from "styled-components";
import "./AddFontFamily.css"
const Container = styled.div`
     display:flex;
     flex-direction:column;
`
const Panel = styled.div`
  
`
export default function AddFontFamilyComponent({
   id,
   onChangeFontFamily
}) {

  // const {setFontFamily} = React.useContext(FontFamily);
  const [fontFamilyDisplay,setFontFamilyDisplay]= React.useState(false);

  const handleOnClickFontFamily=()=>{
    setFontFamilyDisplay(prev=>!prev);
  };

  return (
    <Container className="p-2 mt-[5%]">
      <Panel 
        onClick={handleOnClickFontFamily}
      className="flex cursor-pointer justify-between">
         <h3>Select the Font Style </h3>
         <span className={`cursor-pointer ${fontFamilyDisplay?"arrow--tag--after":"arrow--tag--before"}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          height="24px" viewBox="0 -960 960 960" 
          width="24px"
          
         
          fill="#FFFFFF">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
            </svg>
        </span>
      </Panel>
      <Panel
  className={`overflow-hidden ${
    fontFamilyDisplay ? 'font--tag--select--active' : 'font--tag--select'
  }`}
>

      <ul className="grid grid-cols-3 gap-3 mt-[5%]">
        {fontStyles.map((item,index)=>
          <li
          className="text-center cursor-pointer"
          key={index}
          style={{
            fontFamily:`${item}`,
            cursor:'pointer'
          }}
          onClick={()=>{onChangeFontFamily(id,item)}}
          >Font</li>
      )}
      </ul>
      </Panel>

    </Container>
  )
}
