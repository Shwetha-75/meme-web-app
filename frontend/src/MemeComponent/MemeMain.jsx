import React from "react";

import styled from 'styled-components';
import ImagesComponent from "../ImagesComponent/ImagesComponent";
import EditMemeMain from '../EditMemeComponent/EditMemeMain';
import SelectedImage from "./SelectedImage";


const MemeContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:2rem;
`
const Panel = styled.div`
    flex:${props=>props.weight}
`
export default function MemeMain() {

  const [selectedImage,setSelectedImage] = React.useState(JSON.parse(localStorage.getItem('selectedImage'))||{})
   React.useEffect(()=>{
       
    localStorage.setItem("selectedImage",JSON.stringify(selectedImage))
   })
  return (
    <SelectedImage.Provider value={{selectedImage,setSelectedImage}}>
    <MemeContainer className=" h-[100%]  p-2 ">
      <Panel weight={4} className=" h-[100%] p-5 w-[100%] flex justify-center items-center">
        <EditMemeMain/>
      </Panel>
      <Panel  className="w-[2px] bg-slate-800 h-[100%]"></Panel>
      <Panel weight={1.6} className="h-[100%] w-[100%] rounded-sm">
          <ImagesComponent/>
      </Panel>
    </MemeContainer>
    </SelectedImage.Provider>
  )
}
