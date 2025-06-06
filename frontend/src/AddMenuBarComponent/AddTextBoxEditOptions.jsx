import React from 'react'
import Data from "../EditMemeComponent/Data";
import AddTextBoxComponent from "../AddTextBoxComponents/AddTextBoxComponent";


export default function AddTextBoxEditOptions() {
   const {data,setData}=React.useContext(Data);

   const onChangeTextBoxDisplay=(id)=>{
         setData(data.map((item)=>
               item.id===id ?
               {
                  ...item,
                  textBoxDisplay:!item.textBoxDisplay
               } : {
                  ...item,
                    textBoxDisplay:true
                   }
        ))
   };
  const onChangeEditTextBoxColor=(id,color)=>{
      setData(data.map((item)=>
           item.id===id ?{
              ...item,
              editTextBoxColor:color
           }:{...item}
      ))
  }
  const onChangeEditTextBoxSize=(id,size)=>{
       setData(data.map((item)=>
         item.id===id ? {
            ...item,
            editTextBoxSize:size
         } : {...item}
      ))
  }

  const onChangeChooseTextColor = (id,color)=>{
      setData(data.map((item)=>
          item.id===id ? {
            ...item,
            chooseTextColor:color
          } : {...item}
       ))
  };

  const onChangeEditFontSize =(id,size)=>{
      setData(data.map((item)=>
         item.id===id ?{
            ...item,
           editFontSize:size
         } : {...item}
      ))
  }

  const onChangeFontFamily = (id,font)=>{
     setData(data.map((item)=>
       item.id===id? {
           ...item,
           fontFamily:font
       }:{...item}
    ))
  }
    const handleOnClickRemove=(id)=>{
       const updateData=data.filter((item)=> item.id!==id)
       setData(updateData);
  
    }

  return (
    <>
      {data?.map((item,index)=>
              <AddTextBoxComponent
                id={item.id}
                index={index}
                textBoxDisplay={item.textBoxDisplay}
                onChangeTextBoxDisplay={onChangeTextBoxDisplay}
                editTextBoxColor={item.editTextBoxColor}
                onChangeEditTextBoxColor={onChangeEditTextBoxColor}
                editTextBoxSize={item.editTextBoxSize} 
                onChangeEditTextBoxSize={onChangeEditTextBoxSize}
                chooseTextColor={item.chooseTextColor}
                onChangeChooseTextColor={onChangeChooseTextColor}
                editFontSize={item.editFontSize}
                onRemove={handleOnClickRemove}
                onChangeEditFontSize={onChangeEditFontSize}
                fontFamily={item.fontFamily}
                onChangeFontFamily={onChangeFontFamily}
              />
            )}
    </>
  )
}
