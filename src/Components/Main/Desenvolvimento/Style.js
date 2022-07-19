import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 90vh;    
    display: flex;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    @media only screen and (max-width: 500px){
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 500px){
    height: 160vh;    
    }
  }
`

export const Box1 = styled.div`
    width: 45%;    
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 500px){
    width: 90%;
    margin-top: 5vh;
  }
`

export const Img = styled.img`
    width: 100%;    
`

export const Box2 = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;    
    @media only screen and (max-width: 500px){
    width: 80%;
  }
`

export const SubTitle = styled.h2`
    font-size: 3vw;
    margin-top: 10vh;
    color: #edede9;
    text-shadow: 0.2vw 0.2vw #0093E9;
    @media only screen and (max-width: 500px){
    font-size: 6vw;
    text-align: center;
    margin-top: 5vh;
  }    
`

export const Parag = styled.p`
  font-size: 1.5vw;
  margin-top: 6vh;
  padding: 0 2.2vw 0;
  text-shadow: 0.1vw 0.1vw grey;
  color: #edede9;
  @media only screen and (max-width: 500px){
    font-size: 3.5vw;
    padding: 0;
  }
`

export const Tag = styled.a`
  text-decoration: none;
  color: #fdfcdc;
`