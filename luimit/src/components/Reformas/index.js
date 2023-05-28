import React from 'react'
import {
    ReformasContainer,
    ReformasLogo,
    ReformasBox,
    CardReformas,
    CardImg,
    CardContent,
    CardTitle,
    CardDesc,
    CardButton,
    LogoRef
} from './ReformasElements'

const Reformas = () => {
  return (
    <ReformasContainer>
        <ReformasLogo>
            <LogoRef />
        </ReformasLogo>
        <ReformasBox>
            <CardReformas>
                <CardImg>Foto</CardImg>
                <CardContent>
                    <CardTitle>Pacote</CardTitle>
                    <CardDesc>pacote tal tal tal ksksksasdasdasdakksks</CardDesc>
                    <CardButton>Orçamento</CardButton>
                </CardContent>
            </CardReformas>
            <CardReformas>
                <CardImg>Foto</CardImg>
                <CardContent>
                    <CardTitle>Pacote</CardTitle>
                    <CardDesc>pacote tal tal tal ksksksasdasdasdakksks</CardDesc>
                    <CardButton>Orçamento</CardButton>
                </CardContent>
            </CardReformas>
            <CardReformas>
                <CardImg>Foto</CardImg>
                <CardContent>
                    <CardTitle>Pacote</CardTitle>
                    <CardDesc>pacote tal tal tal ksksksasdasdasdakksks</CardDesc>
                    <CardButton>Orçamento</CardButton>
                </CardContent>
            </CardReformas>
            <CardReformas>
                <CardImg>Foto</CardImg>
                <CardContent>
                    <CardTitle>Pacote</CardTitle>
                    <CardDesc>pacote tal tal tal ksksksasdasdasdakksks</CardDesc>
                    <CardButton>Orçamento</CardButton>
                </CardContent>
            </CardReformas>
        </ReformasBox>
    </ReformasContainer>
  )
}

export default Reformas