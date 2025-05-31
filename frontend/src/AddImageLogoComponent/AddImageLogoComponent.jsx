import React from 'react'
import Logo from '../EditMemeComponent/Logo'
import { Container } from '@mui/system';
export default function AddImageLogoComponent() {
  
  const {logo,setLogo} = React.useContext(Logo);


  return (
    <>
      <Container>
        <input
          type='file'
          name='logo'
          value={logo}
          onChange={(e)=>setLogo(e.target.value)}
        />
      </Container>
    </>
  )
}
