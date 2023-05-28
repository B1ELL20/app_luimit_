import styled from "styled-components";
import logoRef from '../../images/logo_ref_sobre.png'
import logoPis from '../../images/logo_site.png'
import img from '../../images/img_sobre.jpg'

export const SobreBox = styled.section`

    display: flex;
    align-items: center;
    height: 50vh;
    margin: 100px 0px;
    padding: 0px 2%; 
`;

export const SobreContainer = styled.div`

    height: 100%;
    width: 60%;
    text-align: start;
    padding-right: 50px;
`;

export const SobreImg = styled.div`

    height: 100%;
    width: 40%;
    text-align: start;
`;

export const ImgSobre = styled.div`

    width: 500px;
    height: 500px;
    background-image: url(${img});
    background-position: center;
    border-radius: 100%;
    background-color: white;
    margin-left: -50px;
`;

export const SobreContBox = styled.div`

    display: block;
    width: 80%;
    margin: auto;
    text-align: center;
    box-sizing: border-box;
    margin-top: 100px;
`;

export const SobreTitle = styled.h2`

    font-size: 50px;
    color: #2b3180;
    padding: 20px;
`;

export const SobreDesc = styled.div`

    font-size: 20px;
    padding: 10px;
    display: block;
    white-space: wrap;
`;

export const SobreIcons = styled.div`

    width: 100%;
    height: 100px;
    display: flex;
    margin: auto;
    margin-top: 20px;
`;

export const SobreIconPis = styled.div`

    width: 50%;
    height: 100%;
    background-image: url(${logoPis});
    background-position: center;
    background-size: cover;
`;

export const SobreIconRef = styled.div`

    width: 50%;
    height: 100%;
    background-image: url(${logoRef});
    background-position: center;
    background-size: cover;
`;