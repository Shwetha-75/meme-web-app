import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import "./addlogo.css";
// import Meme from "./Meme.png"

// import { HdrAuto } from '@mui/icons-material';
export default function AddDraggableComponent({ 
    id,
    title, 
    index,
    onRemove, 
    onMouseMove, 
    pictureStatus ,
    image,
    editLogoBoxColor,
    editLogoBoxSize 
}) {
    


    React.useEffect(() => {



        // selecting the element that as to be resizable 
        const resizable = document.getElementById(`logo--resizable-${id}`);
        console.log(resizable)
        // ---> selecting the parent element
        const parent = document.querySelector(".outer-border");
        //  initializing the resizing variable, dragging variable 
        let isResizing = false;
        let isDragging = false;
        // Advancing the border type
        let borderType = "";
        // initializing startX & Y ports on the screen to note the presence of the division tag 
        // here we are just modifying the 4 division tags rather than one 
        //                    div 1 top
        //                 _____________
        //                |             |
        //                |             |
        //     div 4      |             |   div2 right
        //     left       |             |
        //                 -------------
        //                     div 3 bottom
        let startX, startY, startWidth, startHeight, startLeft, startTop;

        // Enable dragging
        resizable.addEventListener("mousedown", (e) => {
            //   if the user iis trying to click on the border edge and performing the drag it mis aligns the four division tag since it as to aligned equally 
            //  we return 
            if (e.target.classList.contains("logo--border-handle")) return; // Ignore if clicking on border
            // enabling the dragging variable 
            isDragging = true;
            // extracting the x port from the user cursor 
            startX = e.clientX;
            // extracting the y port from the user cursor 
            startY = e.clientY;


            // noting the left port and top since these are corner case where as website should be retaining in positive axises 
            //                  -           negative
            //                        ________________________
            //                       |                        |
            //                       |                        |
            //      negative axis    |                        |
            //                       |                        |
            //                        -------------------------

            startLeft = resizable.offsetLeft;
            startTop = resizable.offsetTop;
            //  events mouse move and up (draggbleeeeeeeeeeeeeeeeeeeeee)
            document.addEventListener("mousemove", drag);
            document.addEventListener("mouseup", stopDrag);
            //   document.addEventListener("touchmove", drag);
            //   document.addEventListener("touchend", stopDrag);
        });

        function drag(e) {
            if (!isDragging) return;
            // calculating the new left and new top to align withing positive side 
            let newLeft = startLeft + (e.clientX - startX);
            let newTop = startTop + (e.clientY - startY);

            // Restrict within parent bounds
            let maxLeft = parent.clientWidth - resizable.clientWidth;
            let maxTop = parent.clientHeight - resizable.clientHeight;
            // making sure that left position should not got towards negative axis 
            if (newLeft >= 0 && newLeft <= maxLeft) {
                resizable.style.left = `${newLeft}px`;
            }

            // making sure that   
            if (newTop >= 0 && newTop <= maxTop) {
                resizable.style.top = `${newTop}px`;
            }
        }

        function stopDrag() {
            isDragging = false;
            document.removeEventListener("mousemove", drag);
            document.removeEventListener("mouseup", stopDrag);
            //   document.removeEventListener("touchmove", drag);
            //   document.removeEventListener("touchend", stopDrag);
        }


        // Enable resizing
        document.querySelectorAll(".logo--border-handle").forEach(handle => {
            handle.addEventListener("mousedown", (e) => {
                e.preventDefault();
                isResizing = true;
                borderType = e.target.dataset.border;
                startX = e.clientX;
                startY = e.clientY;
                startWidth = resizable.offsetWidth;
                startHeight = resizable.offsetHeight;
                startLeft = resizable.offsetLeft;
                startTop = resizable.offsetTop;
                // startRight = resizable.offsetRight;
                // startBottom = resizable.offsetBottom;
                document.addEventListener("mousemove", resize);
                document.addEventListener("mouseup", stopResize);
                //   document.addEventListener("touchmove", resize);
                //   document.addEventListener("touchend", stopResize);
            });
        });

        function resize(e) {
            if (!isResizing) return;

            let parentWidth = parent.clientWidth;
            let parentHeight = parent.clientHeight;

            if (borderType === `logo--right-${id}`) {
                let newWidth = startWidth + (e.clientX - startX);
                if (newWidth <= parentWidth - startLeft) {
                    resizable.style.width = `${newWidth}px`;
                }
            } else if (borderType === `logo--left-${id}`) {
                let newWidth = startWidth - (e.clientX - startX);
                let newLeft = startLeft + (e.clientX - startX);
                if (newWidth > 50 && newLeft >= 0) {
                    resizable.style.width = `${newWidth}px`;
                    resizable.style.left = `${newLeft}px`;
                }
            } else if (borderType === `logo--bottom-${id}`) {
                let newHeight = startHeight + (e.clientY - startY);
                if (newHeight <= parentHeight - startHeight) {
                    resizable.style.height = `${newHeight}px`;
                }

            } else if (borderType === `logo--top-${id}`) {
                let newHeight = startHeight - (e.clientY - startY);
                let newTop = startTop + (e.clientY - startY);
                if (newHeight > 50 && newTop >= 0) {
                    resizable.style.height = `${newHeight}px`;
                    resizable.style.top = `${newTop}px`;
                }
            }
        }




        function stopResize() {
            isResizing = false;
            document.removeEventListener("mousemove", resize);
            document.removeEventListener("mouseup", stopResize);
            //   document.removeEventListener("touchmove", resize);
            //   document.removeEventListener("touchend", stopResize);
        }
    })

    // React.useEffect(()=>{
    //       const element=document.getElementById("#logo--text-area");


    //       const handlePreventEnter=(e)=>{


    //         if(e.which===13)
    //              e.preventDefault();
    //              alert("")
    //       }
    //       element?.keypress(
    //         handlePreventEnter);


    // })

  
    return (

        <div

            onMouseMove={(e) => onMouseMove(e, id, e.clientX, e.clientY)}
            className='logo--container relative logo--cursor-move'
            id={`logo--resizable-${id}`}
        >
            {pictureStatus &&
      <span className='absolute top-[-20px]'>
        <h1
        style={{
          color:editLogoBoxColor
        }}
        >Logo {index+1}</h1>
      </span>
      }
            
           <span 
        style={{
           color:editLogoBoxColor
        }}
        className="w-fit 
        flex flex-col 
        items-end cursor-pointer absolute top-[-20px] right-0 cursor-pointer deactivate--delete--button" 
        onClick={()=>onRemove(id)}>
            
       {pictureStatus && 
      //  <DeleteForeverIcon />
      <>
        <span className="">
         <svg 
         xmlns="http://www.w3.org/2000/svg" 
         height="20px" 
         viewBox="0 -960 960 960" 
         width="20px" 
         fill={editLogoBoxColor}>
          <path 
          d="m256-200-56-56 224-224-224-224 56-56 
          224 224 224-224 56 56-224 
          224 224 224-56 56-224-224-224 
          224Z"/>
          </svg>
          </span>
      </>
       
       }
        </span>
            <div className={`logo--border-handle   ${pictureStatus ? "logo--top" : "logo--top-active"}`} data-border={`logo--top-${id}`}
             style={
                pictureStatus?{
                    backgroundColor:editLogoBoxColor,
                    heigt:`${editLogoBoxSize}px`
                }:{
                 backgroundColor:'transparent'

                }
             }

            ></div>
            <div className={`logo--border-handle   ${pictureStatus ? "logo--bottom" : "logo--bottom-active"}`} data-border={`logo--bottom-${id}`}

            style={
                pictureStatus?{
                    backgroundColor:editLogoBoxColor,
                    height:`${editLogoBoxSize}px`
                }:{
                   backgroundColor:'transparent'
                }
            }

            ></div>
            <div className="w-full h-full">
                <img
                    id="logo--text-area"
                    src={image}
                    alt=""
                    className="logo--input--draggable--element w-full h-full text-area--tag  object-contain  p-6 bg-transparent cursor-move"
                />

            </div>

            
             {pictureStatus && 
             
             <span
             style={
                pictureStatus?{
                    color:editLogoBoxColor
                }:{
                 color:'transparent'

                }
                 }
                 className="absolute top-[-20px] left-0 h-[3%]"
             >
                 
                {title}
                </span>}
            <div className={`logo--border-handle   ${pictureStatus ? "logo--left" : "logo--left-active"}`} data-border={`logo--left-${id}`}
             
            style={
                pictureStatus?{
                    backgroundColor:editLogoBoxColor,
                    width:`${editLogoBoxSize}px`
                }:{
                   backgroundColor:'transparent'
                }
            }
            ></div>
            <div className={`logo--border-handle   ${pictureStatus ? "logo--right" : "logo--right-active"}`} data-border={`logo--right-${id}`}

             style={
                pictureStatus?{
                    backgroundColor:editLogoBoxColor,
                    width:`${editLogoBoxSize}px`
                }:{
                   backgroundColor:'transparent'
                }
             }  

            ></div>
        </div>


    )
}
