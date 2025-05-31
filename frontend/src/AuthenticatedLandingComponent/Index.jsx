import styled from 'styled-components';
import Main from "./Main";
import Footer from "../FooterComponent/Footer"
const Container = styled.div`
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;

`
const Panel = styled.div`
     
`

export default function Index() {
  return (
    <Container>
      <Main/>
     <Panel className="h-[50vh] w-[98%] mt-[80px] mb-[10px] flex justify-center items-center">
          <Footer/>
      </Panel>
    </Container>
  )
}
