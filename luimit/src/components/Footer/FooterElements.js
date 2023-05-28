import styled from "styled-components"
import back from '../../images/textura_piscina.jpg'

export const FooterBox = styled.footer`

    padding: 20px;
    background-image: linear-gradient(to top, rgba(54,169,225, 0.9), rgba(54,169,225, 0.9)), url(${back});
    display: flex;
    margin-top: 300px;
`;

export const FooterColumn = styled.div`

    width: 33%;
    text-align: start;
`;

export const FooterTitle = styled.h3`

    font-size: 24px;
    color: white;
    text-shadow: 0px 0px 3px black;
`;

export const FooterList = styled.div`

    color: white;
    text-shadow: 0px 0px 3px black;
`;

export const FooterItem = styled.div`

    padding: 10px 10px 10px 0px;

`;