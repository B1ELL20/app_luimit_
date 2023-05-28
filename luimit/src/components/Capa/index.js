import React from 'react'
import { 
    CapaBox,
    CapaContent,
    CapaTitle,
    CapaDesc,
    CapaButton
} from './CapaElements'

const Capa = () => {
  return (
    <CapaBox>
        <CapaContent>
            <CapaTitle>Encontre a sua piscina ideal!</CapaTitle>
            <CapaDesc>As melhores piscinas com a melhor qualidade você encontra na LUIMIT! Desde a construção até a reforma</CapaDesc>
            <CapaButton>FAÇA SEU ORÇAMENTO</CapaButton>
        </CapaContent>
    </CapaBox>
  )
}

export default Capa