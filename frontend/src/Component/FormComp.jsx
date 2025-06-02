import React from 'react'
import "./form.css";
// import { motion } from "framer-motion";
import SelectedImage from './UseContextImage';
// import { nanoid } from 'nanoid';
import { createFileName, useScreenshot } from 'use-react-screenshot';

import Draggable from './DraggableComponent/Draggable';
import { nanoid } from 'nanoid';

// import Image from "./image.jpeg";
// import { nanoid } from 'nanoid';



export default function FormComp() {
  // to generate the canvas to write the text on the image 
  const constraintsRef = React.useRef(null);
  // const buttonRef=React.useRef(true);

  const imageRef=React.useRef(null);
  const [status,setStatus]=React.useState(true);

  const canvasRef=React.useRef(null);

  // const [draggableElement,setDraggableElement]=React.useState([]);
  // const [isTextVisible,setIsTextVisible]=React.useState(false);

  const timeOutRef=React.useRef(null);

  const [data,setData]=React.useState([]);
  const [selectedTag,setSelectedTag]=React.useState('');
  const [pictureStatus,setPictureStatus]=React.useState(true);
    
  const [pictureOverlay,setPictureOverlay]=React.useState(data.length!==0);


  function handleOnClick(){
    setData(prev=>{
      let temp=nanoid();
      return [...prev,{
            id:temp,
            value:'',
            x_position:0,
            y_position:0,
            status:false
      }]
    });
  }
  
  // creating the text for each input field 
  // const handleOnChange=(event)=>{
        
  // }

  // const handleDraggableStart=()=>{
  //   setIsTextVisible(true);
  // };

  // const handleDraggableEnd=()=>{
  //   setIsTextVisible(false);
  // }

  
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
          }
        )
      )
    },5000)

    if(val.length>=10){
         setStatus(prev=>!prev)
    }


  }



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
        )
      )

  }

   

  const handleOnClickRemove=(id)=>{
     const updateData=data.filter((item)=> item.id!==id)
     setData(updateData);

  }

  const [image,takeScreenShot]=useScreenshot({
    type:"image/jpeg",
    quality:1.0
   })

  
  const selectedImage=React.useContext(SelectedImage);
  

  // React.useEffect(()=>{
  //   const canvasReference=canvasRef.current;
  //   const imageReference=imageRef.current;
  
  //   if(!canvasReference || !imageReference)  return;

  
  //   const cfx=canvasReference.getContext("2d");
     
  //    if(!cfx) return;
       

  //    const drawableImageOnCanvas=()=>{
  //       cfx.clearRect(0,0,canvasReference.width,canvasReference.height);
  //       cfx.drawImage(imageReference,0,0,canvasReference.width,canvasReference.height);
  //       cfx.font="sans-serif";
  //       cfx.fontSize="5px";
  //       cfx.fillStyle="white";
    
  //       cfx.fillText("Shwetha",1,10)

  //    }

  //    if(imageReference.complete){
  //      drawableImageOnCanvas();
  //    }else{
  //      imageReference.onload=drawableImageOnCanvas();
  //    }
  // },[selectedImage]);

 
  React.useEffect(()=>{
      const element=document.querySelector("#canvas--tag");
      element.addEventListener("mousemove",function(e){
             let boundry=e.target.getBoundingClientRect();
             let x_port=e.clientX-boundry.left;
             let y_port=e.clientY-boundry.top;
             console.log("Left: "+x_port);
             console.log("Top: "+y_port); 
      });
  });


    

  const handleDownload=()=>{
       setPictureStatus(false);
        setPictureOverlay(false);
  }
    // const download=(image,{name="img",extension="jpg"}={})=>{
    //       console.log("Downloading Image....")
       
          
    //       const a=document.createElement("a");
    //       a.href=image;
    //       a.download=createFileName(extension,name);
    //       a.click();
           
        
    // };
  
    // const handleDownload=()=>{
    
    //     takeScreenShot(constraintsRef?.current).then(download);

    // }


  // const handleDownload=()=>{


    // const canvasReferenceImage=canvasRef.current;

    // if(!canvasReferenceImage) return;
  // takeScreenShot(constraintsRef?.current).then(download)

    // const imageURL=canvasReferenceImage.toDataURL("image/png");
    // const downloadLink = document.createElement("a");
    // downloadLink.href = imageURL;
    // downloadLink.download = "image_with_text.png"; // Set download filename
  
    // // Append to document, trigger download, and remove
    // document.body.appendChild(downloadLink);
    // downloadLink.click();
    // document.body.removeChild(downloadLink);
    


  // }


  React.useEffect(()=>{
       if(pictureStatus===false){
        const download=(image,{name="img",extension="jpg"}={})=>{
                console.log("Downloading Image....")
                const a=document.createElement("a");
                a.href=image;
                a.download=createFileName(extension,name);
                a.click();
          }; 
          takeScreenShot(constraintsRef?.current).then(download);
          setPictureStatus(true);
          setPictureOverlay(true);
       }
  },[pictureStatus,setPictureStatus,takeScreenShot])


  console.log(image,selectedTag)
  return (
    <>
    
<div className='mt-10 h-[350px] h-[500px]  w-[100%] flex position-absolute border border-sky-500'>
  
<div className='w-[20%] border border-sky-500 ml-[5%] mt-[10px] mb-[10px]'>

<div className="w-[90%] ml-[5%] p-[10px] mt-[5px] btn---text--area border border-sky-500">
  <p className='text-white text-center ' onClick={handleOnClick}  id="add--tag">Add</p>
  </div>
  

</div>
  
  <div 
  ref={constraintsRef} 
  className='outer-border w-[60%] ml-[10%] mt-[10px] mb-[10px]'>

    <img
    src={selectedImage.selectedImage.image}
    ref={imageRef}
    className={`top-0 left-0  w-[100%] h-[100%] image--tag--meme ${pictureOverlay && data.length!==0?"image--tag--meme--active":"image--tag--meme--deactive"} `}  
    
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

   <canvas  
   ref={canvasRef}  
   className="w-full h-full"
   id="canvas--tag"
   />
  </div>

  <div className="justify-center mt-[5%]">
        <button 
          id="btn--tag--download"
          onClick={handleDownload}
          className="p-[10px] bg-sky-500 text-white rounded">
            Download
          </button>
        </div>

    </div>
    
    </>
  )
}
