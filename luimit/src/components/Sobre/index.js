import React from 'react'
import {
    SobreBox,
    SobreContainer,
    SobreTitle,
    SobreDesc,
    SobreIcons,
    SobreIconPis,
    SobreIconRef,
    SobreContBox,
    ImgSobre,
    SobreImg 
} from './SobreElements'

const Sobre = () => {
  return (
    
    <SobreBox>
        <SobreImg>
            <ImgSobre>foto</ImgSobre>
        </SobreImg>
        <SobreContainer>
            <SobreContBox>
                <SobreTitle>A LUIMIT</SobreTitle>
                <SobreDesc>
                    ALKSJDLasdaasasdasdasdasddasd
                    assdasKSsdfsdfsdfsdfsdfsdfsdfsd
                    sadasdasdasdasdasdasdfafasdasdasdasdsadassadsadasdas
                </SobreDesc>
            </SobreContBox>
            <SobreIcons>
                <SobreIconPis />
                <SobreIconRef />
            </SobreIcons>
        </SobreContainer>
    </SobreBox>
  )
}

export default Sobre