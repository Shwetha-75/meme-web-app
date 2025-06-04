import styled from "styled-components"
const Panel=styled.div`

`
const Item=styled.div`

`
export default function AddLogoEditListComponent({
  id,
  title,
  onImage}) {


  return (
    <>
      
              <Panel
              className="flex flex-row justify-center items-center">
              <Item className="  w-[40%] text-center">
                {title}
              </Item>
              <Item className="relative w-[50%] flex justify-center items-center text-center">
                <span className="absolute z-0"> 
                 Change the logo
               
                </span>
                <input
                type="file"
                className="relative text-white border border-slate-500"
                 onChange={(e)=>{
                   const file = e.target.files[0];
                  if (file) {
                  const blobUrl = URL.createObjectURL(file)
                  onImage(id,blobUrl)
                  }
                
                }}
                />
              </Item>
              </Panel>
          
   
    </>
  )
}
