import React from 'react'
import {
    FooterBox,
    FooterColumn,
    FooterTitle,
    FooterList,
    FooterItem 
} from './FooterElements'

const Footer = () => {
  return (
    <FooterBox>
        <FooterColumn>
            <FooterTitle>Contato</FooterTitle>
            <FooterList>
                <FooterItem>CELULAR</FooterItem>
                <FooterItem>TELEFONE</FooterItem>
                <FooterItem>EMAIL</FooterItem>
            </FooterList>
        </FooterColumn>
        <FooterColumn>
            <FooterTitle>Contato</FooterTitle>
            <FooterList>
                <FooterItem>CELULAR</FooterItem>
                <FooterItem>TELEFONE</FooterItem>
                <FooterItem>EMAIL</FooterItem>
            </FooterList>
        </FooterColumn>
        <FooterColumn>
            <FooterTitle>Contato</FooterTitle>
            <FooterList>
                <FooterItem>CELULAR</FooterItem>
                <FooterItem>TELEFONE</FooterItem>
                <FooterItem>EMAIL</FooterItem>
            </FooterList>
        </FooterColumn>
    </FooterBox>  
    )
}

export default Footer