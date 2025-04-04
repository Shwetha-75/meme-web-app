import React from 'react'
import Card from './Card';
import SelectedImage from './UseContextImage';
import { MemeGenerate } from '../App';
import FormComp from './FormComp';
// import { saveAs } from 'file-saver';
// creating an use context to store the value of the image 
// import Draggable from './DraggableComponent/Draggable';

export default function Main() {

  // const handleOnClickImage=async(image)=>{
  //   // passing direct public url of the image 
  //   // but instead we should pass storage image url or the image stored in any storage devices like we have blob default 

  //     // saveAs(image,"Image-download")

  //     try{
  //          console.log(image)
  //       let response=await fetch(image);
  //       console.log(response)
  //       let image_url=await response.blob();
  //       saveAs(image_url,"image-download.jpg");

  //     }catch(error){
  //       console.log("Error while downloading the image ")
  //     }
  // }
 
  const [selectedImage,setSelectedImage]=React.useState(JSON.parse(localStorage.getItem('selectedImage'))||{});
  const {memeImage}=React.useContext(MemeGenerate);
  React.useEffect(()=>{
    localStorage.setItem('selectedImage',JSON.stringify(selectedImage))
   })

  return (
    <SelectedImage.Provider  value={{selectedImage,setSelectedImage}}>
    <div className='w-[90%] ml-[5%] relative'>
        <Card/>
        
  <FormComp/>      
    </div>
    { memeImage && <div className="overlay---display">
      <h1>Generating Image......</h1>
    </div>
    }
   
    </SelectedImage.Provider >
  )
}
