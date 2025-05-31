import React from "react";
import Data from "./Data";
import Draggable from "../DraggableComponent/Draggable";
import PictureStatus from "./PictureStatus";
import SelectedImage from "../MemeComponent/SelectedImage"
import ConstraintsRef from "../EditMemeComponent/ConstraintsRef"
import AddLogoComponent from "../AddLogoComponent/AddLogoComponent";


export default function ImageTagEditable() {
  const {constraintsRef} = React.useContext(ConstraintsRef)
  const {data,setData} = React.useContext(Data);
  const timeOutRef=React.useRef(null);
  const [status,setStatus]=React.useState(true);
  const [selectedTag,setSelectedTag]=React.useState('');
  const {selectedImage} = React.useContext(SelectedImage);
  const canvasRef=React.useRef(null);
  const imageRef = React.useRef(null);
  const {pictureStatus}=React.useContext(PictureStatus);  
  const [pictureOverlay]=React.useState(data.length!==0);
 

const handleOnClickDraggableElement=(id)=>{
        setSelectedTag(id);
  }
  const handleOnChangeInputTextOnImage=(e,id)=>{
         e.preventDefault();
         let val=e.target.value;
         if(status){
           if(timeOutRef.current){
             clearTimeout(timeOutRef.current)
         }
        timeOutRef.current=setTimeout(()=>{

      setData((prev)=>
        prev.map((item)=>
          item.id===id?{
            ...item,
            value:val
          }:{
              ...item
            }))
    },5000)

    if(val.length>=10){
         setStatus(prev=>!prev)
       }}

  };


  const handleOnMouseMove=(e,id,x_pos,y_pos)=>{
    setData((prev)=>
         prev.map((item)=>
           item.id===id?{
            ...item,
            x_position:x_pos,
            y_position:y_pos
           }:{
            ...item
           }
        ))
  }



  const handleOnClickRemove=(id)=>{
     const updateData=data.filter((item)=> item.id!==id)
     setData(updateData);

  }

    React.useEffect(()=>{
        const element=document.querySelector("#canvas--tag");
        element.addEventListener("mousemove",function(e){
               let boundry=e.target.getBoundingClientRect();
               let x_port=e.clientX-boundry.left;
               let y_port=e.clientY-boundry.top;
           
        });
    });

  return (
    <>
      <div 
  ref={constraintsRef} 
  className='outer-border'
  style={{
    border:'none'
  }}
  >

    <img
    src={selectedImage?.image}
    ref={imageRef}
    className={`top-0 left-0  w-[100%] h-[100%] image--tag--meme ${pictureOverlay && data.length!==0?"image--tag--meme--active":"image--tag--meme--deactive"} `}  
    style={{
      border:'none'
    }}
    alt=""/>

  
  {/* <Draggable/> */}

  {data.map((item)=>
      <Draggable
       key={item.id}
       id={item.id}
       onChange={handleOnChangeInputTextOnImage}
       onRemove={handleOnClickRemove}
       onMouseMove={handleOnMouseMove}
       pictureStatus={pictureStatus}
       onClick={handleOnClickDraggableElement}
    />)}
   <AddLogoComponent
   
   />
   <canvas  
   ref={canvasRef}  
   style={{
    border:'none'
   }}
   className="w-full h-full"
   id="canvas--tag"
   />
  </div>

    </>
  )
}
