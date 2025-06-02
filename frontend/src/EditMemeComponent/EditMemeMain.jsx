import React from 'react';
import styled from "styled-components";
import ImageTagEditable from "./ImageTagEditable";
import Data from "./Data";
import PreviewButton from "../PreviewComponent/PreviewButton";
import AddMenuBar from "../AddMenuBarComponent/AddMenuBar"
import ConstraintsRef from "./ConstraintsRef";
import DownloadButton from "../DownloadComponent/DownloadButton";
import PictureStatus from "./PictureStatus";
import DataImageTag from "../DataImageTag";
import Logo from './Logo';
import EditLogoColor from './EditLogoColor';
const Container = styled.div`
    display:flex;
    gap:2rem;
    
`
const Panel = styled.div`
      flex:${props => props.weight}
`
export default function EditMemeMain() {


  const [data, setData] = React.useState(()=>{
       let temp=sessionStorage.getItem('data');
       return temp ? JSON.parse(temp) : []
  });
  const [pictureStatus, setPictureStatus] = React.useState(true);
  const constraintsRef = React.useRef(null);
  const [editLogoColor,setEditLogoColor] = React.useState('black');
  const [dataImageTag,setDataImageTag] = React.useState([])
  const [logo,setLogo] = React.useState('')
  // creating the text box
  const handleOnClick = (updatedData) => {
    setData(prev => {

      return [...prev, { ...updatedData }]
    });
  }

  const handleOnAddLogo = (updatedData)=>{
    setDataImageTag([
        ...dataImageTag,
        {...updatedData}
    ])
  }

  React.useEffect(()=>{
      sessionStorage.setItem('data',JSON.stringify(data))
  })

  return (

      <PictureStatus.Provider value={{ pictureStatus, setPictureStatus }}>
      <ConstraintsRef.Provider value={{ constraintsRef }}>
      <Data.Provider value={{ data, setData }}>
      
      <DataImageTag.Provider  value={{dataImageTag,setDataImageTag}}>
      <Logo.Provider value={{logo,setLogo}}>
      <EditLogoColor.Provider value={{editLogoColor,setEditLogoColor}}>
            <Container className=' h-[100%] w-[100%]'>
              <Panel weight={2} className="w-[100%]">
                <AddMenuBar 
                handleOnClick={handleOnClick}
                handleOnAddLogo={handleOnAddLogo}
                />
              </Panel>
              <Panel className="w-[2px] bg-slate-800 h-[110%] mt-[-30px]"></Panel>
              <Panel weight={5} className="gap-[2rem] flex flex-col justify-center items-center">
                <Panel className="p-5 h-[85%] border border-slate-800 rounded-sm">
                  <ImageTagEditable />
                </Panel>
                <Panel weight={1} className="p-2 w-[95%] flex justify-between">
                  <DownloadButton />
                  <PreviewButton />
                </Panel>
              </Panel>
            </Container>
      </EditLogoColor.Provider>
      </Logo.Provider>
      </DataImageTag.Provider>
      </Data.Provider>
      </ConstraintsRef.Provider>
      </PictureStatus.Provider>

  )
}
