import React from "react"
import logo from '../../Images/logo.png'
import * as S from './Style'

export default function Header(){

    const Content = () => {
      return(
        <S.Container>
          <S.Box1>
            <S.Img src={logo} alt="letra L personalizada" />
          </S.Box1>
          <S.Box2>
            <nav>
              <S.List>
                <S.Tag href="#sobre"><S.ListItem>Sobre mim</S.ListItem></S.Tag>
                <S.Tag href="#hobbies"><S.ListItem>Hobbies</S.ListItem></S.Tag>
                <S.Tag href="#desenvolvimento"><S.ListItem>Desenvolvimento Sustentável</S.ListItem></S.Tag>
              </S.List>
            </nav>
          </S.Box2>
        </S.Container>
      )
    }

    return(
      Content()
    )
}