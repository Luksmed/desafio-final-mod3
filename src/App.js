import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

const Globalstyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  width: 100%;  
`

export default function App(){

  return(  
    <Container>
      <Globalstyle />
      <Header />
      <Main />
      <Footer />
    </Container>    
  )
}