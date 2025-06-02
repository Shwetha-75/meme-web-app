import styled from "styled-components";

const Container = styled.div`
     width:60%;
     display:flex;
     justify-content:center;
     align-items:end;
`

const Panel= styled.div`
    flex:${props=>props.weight}
`

export default function Footer() {
  return (
    <Container className="h-[30%]">
         <Panel className=" p-5 w-[30%] cursor-pointer mb-[-100px] text-center h-[80px]">FeedBack</Panel>
         <Panel className=" p-5 w-[30%] cursor-pointer mb-[-100px] text-center h-[80px]">About Us</Panel>
         <Panel className=" p-5 w-[30%] cursor-pointer mb-[-100px] text-center h-[80px]">docs</Panel>
         <Panel className=" p-5 w-[30%] cursor-pointer mb-[-100px] text-center h-[80px]">Help</Panel>
    </Container>
  )
}
