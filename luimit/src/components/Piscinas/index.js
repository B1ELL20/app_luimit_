import React from 'react'
import {
    PiscinasContainer,
    PiscinasLogo,
    PiscinasBox,
    CardPiscinas,
    CardImg,
    CardContent,
    CardTitle,
    CardDesc,
    CardButton,
    LogoPis
} from './PiscinasElements'

const Piscinas = () => {
  return (
    <PiscinasContainer>
        <PiscinasLogo>
            <LogoPis />
        </PiscinasLogo>
        <PiscinasBox>
            <CardPiscinas>
                <CardImg>Foto</CardImg>
                <CardContent>
                    <CardTitle>Pacote</CardTitle>
                    <CardDesc>pacote tal tal tal ksksksasdasdasdakksks</CardDesc>
                    <CardButton>Orçamento</CardButton>
                </CardContent>
            </CardPiscinas>
            <CardPiscinas>
                <CardImg>Foto</CardImg>
                <CardContent>
                    <CardTitle>Pacote</CardTitle>
                    <CardDesc>pacote tal tal tal ksksksasdasdasdakksks</CardDesc>
                    <CardButton>Orçamento</CardButton>
                </CardContent>
            </CardPiscinas>
            <CardPiscinas>
                <CardImg>Foto</CardImg>
                <CardContent>
                    <CardTitle>Pacote</CardTitle>
                    <CardDesc>pacote tal tal tal ksksksasdasdasdakksks</CardDesc>
                    <CardButton>Orçamento</CardButton>
                </CardContent>
            </CardPiscinas>
            <CardPiscinas>
                <CardImg>Foto</CardImg>
                <CardContent>
                    <CardTitle>Pacote</CardTitle>
                    <CardDesc>pacote tal tal tal ksksksasdasdasdakksks</CardDesc>
                    <CardButton>Orçamento</CardButton>
                </CardContent>
            </CardPiscinas>
        </PiscinasBox>
    </PiscinasContainer>
  )
}

export default Piscinas