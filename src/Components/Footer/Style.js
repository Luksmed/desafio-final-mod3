import styled from 'styled-components'

export const Container = styled.section`   
    height: 23vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;   
    background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
`

export const Box1 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25%;
    @media only screen and (max-width: 500px){
    width: 60%;
  }       
`

export const SubTitle = styled.h3`
  font-size: 2vw;
  color: #edede9;
  text-shadow: 0.2vw 0.2vw 0.2vw #0093E9;
  @media only screen and (max-width: 500px){
    font-size: 4.5vw;
  }
`

export const Parag = styled.p`
  color: #edede9; 
`