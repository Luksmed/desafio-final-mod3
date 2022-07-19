import React from 'react'
import * as S from './Style'
import Carousel from 'nuka-carousel'
import trilha from '../../../Images/trilha.jpg'
import can from '../../../Images/can.JPG'
import trt from '../../../Images/trt.JPG'
import vsb from '../../../Images/vsb.JPG'
import chile from '../../../Images/chile.JPG'
import dome from '../../../Images/dome.JPG'

export default function Hobbies(){

    const Content = () => {
      return(
        <S.Container>
          <S.Box1>
            <i><S.SubTitle id='hobbies'>Hobbies</S.SubTitle></i>
            <S.Parag>Games de luta sempre foram uma diversão pra mim! Só nunca imaginei que acabaria entrando no cenário competitivo, ganharia dinheiro, patrocínio, e até viajaria pra outros países através deles!</S.Parag>     
            <S.Parag>Aventuras ao ar livre, especialmente trilhas, são atividades que me fazem muito bem! Dificilmente perco uma oportunidade de me aventurar em algum lugar que ainda não conheço, e estar em contato com a natureza.</S.Parag> 
            <S.Parag>Viajar é o combustível da minha alma! Não há prazer maior do que conhecer lugares, pessoas e culturas diferentes. Sempre que tenho a oportunidade, busco conhecer novos horizontes!</S.Parag>  
          </S.Box1>
          <S.Box2>
          <Carousel
            slidesToShow={1}
            autoplay="true"           
            autoplayInterval={3000}
            adaptiveHeight={true}
            wrapAround={true}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<"               
            }}           
            >              
              <S.Img src={trilha} alt="trilha" />
              <S.Img src={vsb} alt="Espaço de Games" />
              <S.Img src={can} alt="neve na rua" />
              <S.Img src={chile} alt="Rua no Chile" />
              <S.Img src={trt} alt="Campeonato de games" />   
              <S.Img src={dome} alt="domo" />           
            </Carousel>             
          </S.Box2>          
        </S.Container>
      )
    }

    return(
      Content()
    )
}