import React from 'react';
import styled from "styled-components";
import ImageTagEditable from "./ImageTagEditable";
import Data from "./Data";
import PreviewButton from "../PreviewComponent/PreviewButton";
import AddMenuBar from "../AddMenuBarComponent/AddMenuBar"
import ConstraintsRef from "./ConstraintsRef";
import DownloadButton from "../DownloadComponent/DownloadButton";
import PictureStatus from "./PictureStatus";
import EditTextBoxColor from './EditTextBoxColor';
import EditTextBoxSize from './EditTextBoxSize';
import ChooseTextColor from "./ChooseTextColor";
import EditFontSize from "./EditFontSize";
import FontFamily from "./FontFamily";
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


  const [data, setData] = React.useState([]);
  const [pictureStatus, setPictureStatus] = React.useState(true);
  const constraintsRef = React.useRef(null);
  const [editLogoColor,setEditLogoColor] = React.useState('black');
  const [editTextBoxColor, setEditTextBoxColor] = React.useState("white");
  const [editTextBoxSize,setEditTextBoxSize] = React.useState('1');
  const [chooseTextColor,setChooseTextColor] = React.useState('white');
  const [editFontSize,setEditFontSize] = React.useState('16');
  const [fontFamily,setFontFamily] = React.useState([1,'cambria']);
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

  return (

      <PictureStatus.Provider value={{ pictureStatus, setPictureStatus }}>
      <ConstraintsRef.Provider value={{ constraintsRef }}>
      <Data.Provider value={{ data, setData }}>
      <EditTextBoxColor.Provider value={{ editTextBoxColor, setEditTextBoxColor }}>
      <EditTextBoxSize.Provider value={{editTextBoxSize,setEditTextBoxSize}}>
      <EditFontSize.Provider value={{editFontSize,setEditFontSize}}>
      <ChooseTextColor.Provider value={{chooseTextColor,setChooseTextColor}}>
      <FontFamily.Provider value={{fontFamily,setFontFamily}}>
      <DataImageTag.Provider  value={{dataImageTag,setDataImageTag}}>
      <Logo.Provider value={{logo,setLogo}}>
      <EditLogoColor.Provider value={{editLogoColor,setEditLogoColor}}>
            <Container className='p-2 h-[100%] w-[99%]'>
              <Panel weight={2} className="p-1">
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
      </FontFamily.Provider>   
      </ChooseTextColor.Provider>
      </EditFontSize.Provider>
      </EditTextBoxSize.Provider>
      </EditTextBoxColor.Provider>
      </Data.Provider>
      </ConstraintsRef.Provider>
      </PictureStatus.Provider>

  )
}
