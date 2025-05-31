import ImageCard from "./ImageCard"
import React from "react";
import styled from 'styled-components';
import DataSet from "./data";
import SelectedImage from "../MemeComponent/SelectedImage";


import "./images.css"
const Container = styled.div`
     max-height:100%;  
     overflow-y:scroll;
     gap:1.2rem;  
`

export default function ImagesComponent() {
  // Animation Effects
  const [isVisible,setIsVisible] = React.useState(false);
  const divRef=React.useRef(null); 
  const {setSelectedImage}=React.useContext(SelectedImage);
  const [data,setData] = React.useState(DataSet);

  const handleOnSelectImage=(value)=>{
       let copy_data=[...data];
       
       copy_data=copy_data.map((item)=>(
            item.id===value.id?
            {...item,status:true}:
            {...item,status:false}
       ));

       setData([...copy_data]);
       console.log(value.image)
       setSelectedImage(copy_data.find((item)=>{
          if(item.id === value.id){
              return item
          }
          return null;
       }))
      
  }   
   
  // Animation Effects
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (divRef.current) observer.observe(divRef.current);
    return () => observer.disconnect();
  }, []);




  return (
    <Container 
    ref={divRef}
    className={`container--images--tag  p-3 border border-slate-900 scroll-smooth transition-all duration-700 delay-300 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }   `}>
      {data?.map((item)=>(


        <ImageCard
        key={item.id}
        image={item.image}
        item={item}
        onClick={handleOnSelectImage}>

        </ImageCard>
      )
      )}
    </Container>
  )
}
