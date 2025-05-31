import styled from "styled-components";
import AddColorToTextBox from "../AddColorToTextBoxComponent/AddColorToTextBox";
import AddFontFamilyComponent from "../AddFontFamilyComponent/AddFontFamilyComponent";

const Container = styled.div`
   display:flex
`
const Panel = styled.div`
   
`
export default function AddTextBoxComponent() {
  return (
    <Container className="flex flex-col ">
        <Panel className="text-center">Text Box 1</Panel>
        <Panel>
         <AddColorToTextBox/>
        </Panel>
        <Panel>
        <AddFontFamilyComponent/>
        </Panel>
        <Panel></Panel>

    </Container>
  )
}
