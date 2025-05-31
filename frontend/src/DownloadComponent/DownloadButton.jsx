import styled from "styled-components";
import { createFileName, useScreenshot } from 'use-react-screenshot';
import PictureStatus from "../EditMemeComponent/PictureStatus";
import ConstraintsRef from "../EditMemeComponent/ConstraintsRef"
import React from "react";
import "./downloadButton.css"
const Button = styled.button`
    
`

export default function DownloadButton() {
   
  const {constraintsRef} = React.useContext(ConstraintsRef);


  const {pictureStatus,setPictureStatus} = React.useContext(PictureStatus);
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
       
  }    
  
  const [image,takeScreenShot]=useScreenshot({
    type:"image/jpeg",
    quality:1.0
   })
   
   
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
         
       }
  },[pictureStatus,setPictureStatus,takeScreenShot,constraintsRef])

  return (
    <Button
      className="download--btn--tag p-3 w-[30%]"
    onClick={handleDownload}
    
    >
       Download
    </Button>
  )
}
