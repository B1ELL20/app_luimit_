import styled from "styled-components";
import back from '../../images/back_reforma.png'
import logo from '../../images/logo_ref.png'

export const ReformasContainer = styled.section`

    margin-top: 100px;
`;

export const ReformasLogo = styled.div`

    height: 100px;
    width: 300px;
    background-image: linear-gradient(to top, rgba(239,126,82, 0.9), rgba(239,126,82, 0.9)), url(${back});
    border-radius: 0px 10px 0px 0px;
`;

export const LogoRef = styled.div`

    width: 100%;
    height: 100%;
    background-image: url(${logo});
`;

export const ReformasBox = styled.div`

    display: flex;
    justify-content: space-around;
    padding: 50px 10px;
    background-image: linear-gradient(to top, rgba(239,126,82, 0.9), rgba(239,126,82, 0.9)), url(${back});
`;

export const CardReformas = styled.div`

    border-radius: 10px;
    height: 400px;
    width: 20%;
    background-color: white;
    box-shadow: 0px 0px 10px black;
`;

export const CardImg = styled.div`

    background-color: lightsalmon;
    height: 50%;
    border-radius: 10px 10px 0px 0px;
`;

export const CardContent = styled.div`

    padding: 10px;
    text-align: center;
`;

export const CardTitle = styled.h3`

    font-size: 26px;
    color: #ef7e52;
    padding: 10px 10px 0px 10px;
`;

export const CardDesc = styled.p`

    padding: 10px;
    font-size: 20px;
`;

export const CardButton = styled.button`

    color: white;
    background-color: #ef7e52;
    border: 1px solid #ef7e52;
    margin: 10px;
    font-size: 24px;
    padding: 10px 20px;
    border-radius: 10px;
`;