import styled from "styled-components";
import "./searchMenu.css"
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = styled.div`
   width:100%;
   display:flex;
`
const Input =  styled.input`
   outline:none;
`
export default function SearchMenuBarComponent() {
  return (
    <SearchBar className="">
        
        <Input className="border border-slate-900 search--tag--input" 
        placeholder="Search Menu"
        ></Input>
        <SearchIcon
        className="mt-[15px] cursor-pointer search--icon--tag"
        />
    </SearchBar>
  )
}
