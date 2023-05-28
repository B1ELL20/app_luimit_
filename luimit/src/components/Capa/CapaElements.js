import styled from 'styled-components'
import capa from '../../images/capa.png'

export const CapaBox = styled.header`

    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${capa});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
`;

export const CapaContent = styled.div`

    text-align: center;
    color: white;
    padding: 20px;
    width: 50%;
`;

export const CapaTitle = styled.h1`

    font-size: 50px;
    margin-bottom: 30px;
`;

export const CapaDesc = styled.h1`

    font-size: 24px;
    margin: 10px 0px;
`;

export const CapaButton = styled.button`

    font-size: 26px;
    background-color: transparent;
    border: 1px solid white;
    font-weight: bold;
    color: white;
    border-radius: 20px;
    padding: 10px 20px;
    margin-top: 20px; 

    &:hover {

        background-color: white;
        color: #2b3180;
        cursor: pointer;
    }
`;