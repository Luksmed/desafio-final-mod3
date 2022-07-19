import React from 'react'
import github from '../../Images/github.png'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import linkedin from '../../Images/linkedin.png'
import * as S from './Style'

export default function Footer(){

    const Content = () => {
      return(
        <S.Container>
          <S.SubTitle>Contato</S.SubTitle>
          <S.Box1>
            <a href='https://github.com/Luksmed' target="_blank"><img src={github} alt="github" /></a>
            <a href='https://www.facebook.com/lucas.medeiros.7927' target="_blank"><img src={facebook} alt="facebook" /></a>
            <a href='https://www.instagram.com/_lmedeiros/' target="_blank"><img src={instagram} alt="instagram" /></a>
            <a href='https://www.linkedin.com/in/lucas-medeiros-43167524/' target="_blank"><img src={linkedin} alt="linkedin" /></a>
          </S.Box1>
          <S.Parag><u>lukksme@gmail.com</u></S.Parag>
        </S.Container>
      )
    }

    return(
      Content()
    )
}