import styled from "styled-components";
import "./addLogoEditList.css"
import AddColorToTextBox from "../AddColorToTextBoxComponent/AddColorToTextBox";
import AddTextBoxSizeComponent from "../AddTextBoxSizeComponent/AddTextBoxSize";

const Panel=styled.div`

`
const Item=styled.div`

`

const Container =styled.div`
 

`
export default function AddLogoEditListComponent({
  id,
  index,
  onImage,
  editLogoBoxSize,
  logoBoxDisplay,
  editLogoBoxColor,
  onChangeEditLogoBoxColor,
  onChangeEditLogoBoxSize,
  onRemove,
  onChangeLogoBoxDisplay
}) {

   
  return (
    <Container className={`flex flex-col ${index>0 ? "mt-[5%]":"mt-[0]"}`}>
      
        <Panel
        className="p-2 flex justify-between">
        <Item className="">
          Logo {index+1}
        </Item>
         <Item className="cursor-pointer">
             { logoBoxDisplay ?
              <>
              <span className="flex gap-[0.8rem]">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="22px" 
                viewBox="0 -960 960 960" 
                width="18px" 
                onClick={()=>onChangeLogoBoxDisplay(id)} 
                fill="#FFFFFF">
                  <path 
                  d="M200-200h57l391-391-57-57-391 
                  391v57Zm-80 80v-170l528-527q12-11 
                  26.5-17t30.5-6q16 0 31 6t26 
                  18l55 56q12 11 17.5 26t5.5 
                  30q0 16-5.5 
                  30.5T817-647L290-120H120Zm640-584-56-56 
                  56 56Zm-141 85-28-29 57 57-29-28Z"/>
                </svg>
                  
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  height="18px" 
                  viewBox="0 -960 960 960" 
                  width="20px"
                  onClick={()=>onRemove(id)} 
                  fill="#FFFFFF">
                    <path 
                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 
                    33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 
                    0h80v-360h-80v360ZM280-720v520-520Z"/>
                  </svg>
                </span>
              </>
              :
              <>
              <span className="flex gap-[0.8rem]">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="24px" 
              viewBox="0 -960 960 960"
              onClick={()=>onChangeLogoBoxDisplay(id)} 
              width="18px" 
              fill="#FFFFFF">
              <path d="M240-440v-80h480v80H240Z"/></svg>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="20px" 
              viewBox="0 -960 960 960" 
              width="18px"
              onClick={()=>onRemove(id)} 
              fill="#FFFFFF">
                <path 
                d="M280-120q-33 
                0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 
                33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 
                0h80v-360h-80v360ZM280-720v520-520Z"/>
              </svg>
              </span>
              </>
              }
            </Item>
        </Panel>

        <Panel className={`overflow-hidden ${logoBoxDisplay?"logo--box--display":"logo--box--display--active"}`}>
         <Panel className={`text-left p-2 text-slate-400 mt-[2%]`}>Edit Logo Box</Panel>
          
          <Panel>
             <AddColorToTextBox
                 id={id}
                 editTextBoxColor={editLogoBoxColor}
                 onChangeEditTextBoxColor={onChangeEditLogoBoxColor}
             />
          </Panel>
          <Panel>
            <AddTextBoxSizeComponent
             id={id}
             editTextBoxSize={editLogoBoxSize}
             onChangeEditTextBoxSize={onChangeEditLogoBoxSize}
            />
          </Panel>
        <Item className="relative h-[50px] flex justify-center items-center text-center p-2">
          <span className="absolute "> 
           Change the logo
         
          </span>
          <input
          type="file"
          className="relative text-white h-[35px]  border border-slate-500 rounded"
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
          
   
    </Container>
  )
}
