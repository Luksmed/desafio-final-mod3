import styled, {keyframes} from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 100vh;    
    display: flex;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    @media only screen and (max-width: 500px){
    flex-direction: column;
    align-items: center;
    height: 143vh;
  }
`

export const Box1 = styled.div`
    width: 50%;    
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 500px){
    width: 80%;
    margin-top: 5vh;
  }
`

export const Efeito = keyframes`
    0%{
     transform: rotate(0deg);
     border: 1vw dotted white;     
    }
    50%{
    transform: rotate(180deg);
    border: 1vw dotted blue;    
    }
    100%{
    transform: rotate(360deg);
    border: 1vw dotted white;      
    }
`

export const Box1a = styled.div`
    width: 35%;
    height: 77vh;
    border: 0.5vw dotted red;  
    position: absolute;
    border-radius: 50%;
    animation: ${Efeito} 20s linear infinite;
    @media only screen and (max-width: 500px){
    width: 57%;
    height: 54vh;
    
  }
`

export const Img = styled.img`
    width: 70%;
    border-radius: 50%;
`

export const Box2 = styled.div`
    width: 50%;   
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
    margin-top: 5vh;
  }
`

export const Parag = styled.p`
    font-size: 1.5vw;
    margin-top: 4vh;
    padding: 0.7vw;
    color: #fdfcdc;  
    @media only screen and (max-width: 500px){
    font-size: 3.5vw;
    margin-top: 3vh;
  }
`