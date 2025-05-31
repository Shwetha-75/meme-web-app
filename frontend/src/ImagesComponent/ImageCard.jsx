
export default function ImageCard({image,item,onClick}) {
  return (
    <div 
    onClick={()=>onClick(item)}
    className={`${item.status?"image--tag--each--active":"image--tag--each"}  h-[240px] mt-[15px] justify-center items-center relative rounded-sm`}>
        <div>
            <img
            className="p-3 w-full h-full absolute"
            src={image}
            alt=''
            />

        </div>
    </div>
  )
}
