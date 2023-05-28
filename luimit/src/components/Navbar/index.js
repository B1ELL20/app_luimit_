import React from 'react'
import {
    Nav,
    Navbarinbox,
    Navlogo,
    Navlist,
    Navitem
} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <Navbarinbox>
                <Navlogo />
                <Navlist>
                    <Navitem>Home</Navitem>
                    <Navitem>Quem somos</Navitem>
                    <Navitem>Piscinas</Navitem>
                    <Navitem>Reformas</Navitem>
                    <Navitem>Contato</Navitem>
                </Navlist>
            </Navbarinbox>
        </Nav>
    </>
  )
}

export default Navbar