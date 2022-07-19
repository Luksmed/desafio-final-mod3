import React from 'react'
import perfil from '../../../Images/perfil.JPG'
import * as S from './Style'

export default function Sobre(){

    const Content = () => {
      return(
        <S.Container>
          <S.Box1>
            <S.Box1a></S.Box1a>
            <S.Img src={perfil} alt="foto de perfil" />
          </S.Box1>
          <S.Box2>
            <i><S.SubTitle id='sobre'>Sobre Mim</S.SubTitle></i>
            <S.Parag>Olá! Me chamo Lucas Medeiros, tenho 32 anos, e moro na cidade de São Gonçalo, região metropolitana do Estado do Rio de Janeiro.</S.Parag>
            <S.Parag>Atualmente sou estudante do programa de tecnologia da escola <i><b>Vai Na Web</b></i>, e estou terminando o curso de desenvolvedor front-end! Foram três módulos de muita aprendizagem!</S.Parag>
            <S.Parag>Neste blog vocês encontrarão algumas informações pessoais a meu respeito, além de ficarem por dentro das novidades sobre meus projetos! Espero que gostem!</S.Parag>            
          </S.Box2>
        </S.Container>
      )
    }
        
    return(
       Content()
    )
}


