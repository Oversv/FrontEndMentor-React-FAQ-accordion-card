import React from 'react'
import Logo from './components/Logo'
import Accordion from './components/Accordion'
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from './assets/theme/theme'


const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    box-sizing: border-box;
  }

  body{ 
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 12px;
    min-height: 100vh;
    margin: 148px 24px 0 24px;
    background: linear-gradient(180deg, hsl(273, 75%, 66%) 0%, hsl(240, 73%, 65%) 100%); //! Cambiar colores

    @media screen and (min-width: 768px){
      margin-top: 128px;
    }
  }

  main{    
    position: relative;
    max-width: 920px;  
    margin-right: auto;
    margin-left: auto;     
  }
`

const MainOverflowHidden = styled.div`
    border-radius: 25px;
    padding: 24px;
    display: flex;  
    flex-direction: column;
    align-items: flex-start;
    background-color: white;

    @media screen and (min-width: 768px){
      flex-direction: row;
      justify-content: space-between;    
      margin-left: auto;
      margin-right: auto;
      height: 509px;
      padding: 0;
      overflow: hidden;      
    }
`

function App() {

  return (
    <>    
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <main>
          <MainOverflowHidden>
            <Logo/>
            <Accordion/>
          </MainOverflowHidden>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
