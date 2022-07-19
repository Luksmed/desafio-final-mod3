import styled from "styled-components";
import wall from '../../Images/wall.JPG'

export const Container = styled.section`
  width: 100%;     
`

export const Box = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${wall});
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 500px){
    height: 55vh;
  }
`

export const Title = styled.h1`
  color: navy;
  font-size: 6vw;
  margin-top: 8vh;
  color: #0093E9;
  text-shadow: 0.2vw 0.2vw white;
  @media only screen and (max-width: 500px){
    font-size: 8vw;
    text-align: center;
    margin-top: 2vh;
  }  
`