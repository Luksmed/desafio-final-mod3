import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 95vh;  
    display: flex;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    @media only screen and (max-width: 500px){
    flex-direction: column;
    align-items: center;
    height: 160vh;
  }
`

export const Box1 = styled.div`
    width: 40%;   
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 500px){
    width: 80%;
  }
`

export const SubTitle = styled.h2`
    font-size: 3vw;
    margin-top: 4vh;
    color: #edede9;
    text-shadow: 0.2vw 0.2vw #0093E9;
    @media only screen and (max-width: 500px){
    font-size: 6vw;
    margin-top: 6vh;
  }
`

export const Parag = styled.p`
    font-size: 1.5vw;
    margin-top: 4vh;
    padding: 0 4.4vw 0;
    color: #edede9;
    text-shadow: 0.1vw 0.1vw grey;
    @media only screen and (max-width: 500px){
    font-size: 3.5vw;
    padding: 0;
    margin-top: 6vh;
  }   
`

export const Img = styled.img`
    width: 80%;
    margin-left: 10%;
    height: 70vh;   
    margin-top: 12.5vh;  
    border: 0.2vw solid #0093E9;
    border-radius: 5%;
    @media only screen and (max-width: 500px){
      height: 50vh;
      margin-left: 10%;
      margin-top: 4vh;
      width: 80%;
  }
`

export const Box2 = styled.div`
    width: 60%;    
    @media only screen and (max-width: 500px){
    width: 100%;    
    margin-top: 3vh;
  }
`