import React from 'react'
import objetivos from '../../../Images/desen.png'
import * as S from './Style'

export default function Desenvolvimento(){

    const Content = () => {
      return(
        <S.Container>
          <S.Box1>
            <S.Img src={objetivos} alt='objetivos de desenvolvimento' />
          </S.Box1>
          <S.Box2>
            <i><S.SubTitle id='desenvolvimento'>Desenvolvimento Sustentável</S.SubTitle></i>
            <S.Parag>A sociedade vem enfrentando desafios de origens diversas, que impactam negativamente na vida de muitos indivíduos; dessa forma, precisamos tomar uma iniciativa e fazer a nossa parte para contribuirmos com o desenvolvimento sustentável de nosso entorno.</S.Parag>
            <S.Parag>Obviamente, não dá para mudar o mundo de uma hora pra outra, mas podemos começar, por exemplo, tentando impactar positivamente em nossa rua, nosso bairro... e assim por diante. Dito isso, clique <S.Tag href="https://desenvolvimento-sustentavel-onu.netlify.app/" target="_blank"><u>aqui</u></S.Tag> e veja como estou abordando um de meus projetos para atingir alguns objetivos de desenvolvimento, planejados para o bairro onde resido! </S.Parag>            
          </S.Box2>
        </S.Container>
      )
    }

    return(
      Content()
    )
}