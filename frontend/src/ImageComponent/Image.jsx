import React from 'react';
import { ConstraintsRef } from '../App';
import SelectedImage from '../Component/UseContextImage';
import { ImageRef } from '../App';
import { Data } from '../App';
export default function Image() {

const {constraintsRef} =React.useContext(ConstraintsRef);
const selectedImage =React.useContext(SelectedImage);
const imageRef=React.useContext(ImageRef);
const [data,setData]=React.useContext(Data);
const [pictureOverlay,setPictureOverlay]=React.useState(data.length!==0);



  return (
    <>
    <div
    ref={constraintsRef}>

        <img
         src={selectedImage.selectedImage.image}
         alt=""
         ref={imageRef}
        className={`top-0 left-0  w-[100%] h-[100%] image--tag--meme ${pictureOverlay && data.length!==0?"image--tag--meme--active":"image--tag--meme--deactive"} `}  

        />
     
    </div>

    </>
  )
}
