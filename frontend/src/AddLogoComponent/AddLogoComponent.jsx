import React from "react";
import PictureStatus from "../EditMemeComponent/PictureStatus";
import AddDraggableComponent from "./AddDraggableComponent";
import DataImageTag from "../DataImageTag"
export default function AddLogoComponent(){

    // const [logoImageTag,setLogoImageTag] = React.useState("");
    const {pictureStatus} = React.useContext(PictureStatus);
    const {dataImageTag,setDataImageTag} = React.useContext(DataImageTag);
  

    // const handleOnClickAddTag=()=>{
         
    //    setDataImageTag([
    //     ...dataImageTag,
    //     {
    //         id:nanoid(),
    //         value:'',
    //         x_position:0,
    //         y_position:0,
    //         status:false
    //     }
    //    ])
    // }
    const handleOnRemove = (id)=>{
        setDataImageTag(dataImageTag.filter((item)=> item.id!==id))
    }

    const handleOnMouseMove=(id,x_pos,y_pos)=>{
        setDataImageTag(dataImageTag.map((item)=>
            item.id===id ? {
                ...item,
                x_position:x_pos,
                y_position:y_pos
            }:{
                ...item
            }
        )
        )
    }
    return (
        <>
        {dataImageTag?.map((item)=>
         <AddDraggableComponent
           key={item.id}
           id={item.id}
           title={item.title}
           onRemove={handleOnRemove}
           onMouseMove={handleOnMouseMove}
           pictureStatus={pictureStatus}
           image={item.value}  
         />
    
    )}
        </>
    )
}