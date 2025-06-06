import React from 'react'
import DataImageTag from "../DataImageTag";
import styled from "styled-components";
import AddLogoEditListComponent from '../AddLogoEditListComponents/AddLogoEditListComponent';
const Panel = styled.div`

`

export default function AddLogoEditOptions() {


   const { dataImageTag, setDataImageTag } = React.useContext(DataImageTag);
   const handleOnChangeOnImage = (id, image) => {
      setDataImageTag(dataImageTag.map((item) =>
         item.id === id ?
            {
               ...item,
               value: image
            } : { ...item }


      ))
   }

   const handleRemoveTag=(id)=>{
        setDataImageTag(dataImageTag.filter((item)=>item.id!==id))
   }
   const onChangeEditLogoBoxColor = (id, color) => {
      setDataImageTag(dataImageTag.map((item) =>
         item.id === id ? {
            ...item,
            editLogoBoxColor: color
         } : { ...item }
      ))
   }
   const onChangeEditLogoBoxSize = (id, size) => {
      setDataImageTag(dataImageTag.map((item) =>
         item.id === id ? {
            ...item,
            editLogoBoxSize: size
         } : { ...item }
      ))
   }
   const onChangeLogoBoxDisplay = (id)=>{
      
        setDataImageTag(dataImageTag.map((item)=>
           item.id===id ? {
              ...item,
              logoBoxDisplay:!item.logoBoxDisplay

           } : {
                ...item,
                logoBoxDisplay:true
           }
      ))
   }

   return (
      <>
         <Panel className="flex flex-col gap-[0.6rem]">
            {dataImageTag.map((item,index) =>
               <AddLogoEditListComponent
                  id={item.id}
                  index={index}
                  title={item.title}
                  onImage={handleOnChangeOnImage}
                  onChangeEditLogoBoxColor={onChangeEditLogoBoxColor}
                  onChangeEditLogoBoxSize={onChangeEditLogoBoxSize}
                  onRemove={handleRemoveTag}
                  logoBoxDisplay={item.logoBoxDisplay}
                  onChangeLogoBoxDisplay={onChangeLogoBoxDisplay}
                  editLogoBoxColor={item.editLogoBoxColor}
               />
            )}
         </Panel>

      </>
   )
}
