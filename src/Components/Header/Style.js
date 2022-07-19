import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;   
  background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
  @media only screen and (max-width: 500px){
    height: 12vh;
  }
`

export const Box1 = styled.div`
  width: 40%; 
  display: flex;
  align-items: center; 
  @media only screen and (max-width: 500px){
    width: 20%;
  }   
`

export const Img = styled.img`
  width: 13%;
  margin-left: 10%;
  @media only screen and (max-width: 500px){
    width: 50%;
    margin-left: 25%;
  }
`

export const Box2 = styled.div`
  width: 60%;  
  display: flex;
  align-items: center;   
  @media only screen and (max-width: 500px){
    width: 80%;
  }  
`

export const Tag = styled.a`
  text-decoration: none;
`

export const List = styled.ul`
  display: flex;
`

export const ListItem = styled.li`
  list-style: none;
  font-size: 1.8vw;
  padding-right: 6vw; 
  color: #edede9;
  @media only screen and (max-width: 500px){
    font-size: 3vw;
    padding-right: 4vw;
  }
`