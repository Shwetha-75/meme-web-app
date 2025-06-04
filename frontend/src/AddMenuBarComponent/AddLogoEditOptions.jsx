import React from 'react'
import DataImageTag from "../DataImageTag";
import styled from "styled-components";
import AddLogoEditListComponent from '../AddLogoEditListComponents/AddLogoEditListComponent';
const Panel=styled.div`

`

export default function AddLogoEditOptions() {

    
     const {dataImageTag,setDataImageTag} = React.useContext(DataImageTag);
         const handleOnChangeOnImage=(id,image)=>{
          setDataImageTag(dataImageTag.map((item)=>
              item.id ===id ?
              {
                 ...item,
                 value:image
              }: {...item}
              
              
         ))
      } 
       
  return (
    <>
    <Panel  className="flex flex-col gap-[0.6rem]">
          {dataImageTag.map((item)=>
              <AddLogoEditListComponent
                 id={item.id}
                 title={item.title}
                 onImage={handleOnChangeOnImage}
              />
          )}
      </Panel>
   
    </>
  )
}
