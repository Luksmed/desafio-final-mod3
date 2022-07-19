import React from 'react'
import Sobre from './Sobre/Sobre'
import Hobbies from './Hobbies/Hobbies'
import Desenvolvimento from './Desenvolvimento/Desenvolvimento'
import * as S from './Style'

export default function Main(){

  const Content = () => {
    return(
      <S.Container>  
        <S.Box>
          <S.Title>Seja bem-vindo ao meu Blog!</S.Title>
        </S.Box>    
        <Sobre />
        <Hobbies />
        <Desenvolvimento />
      </S.Container>    
    )
  }

  return(
    Content()
  )
}
