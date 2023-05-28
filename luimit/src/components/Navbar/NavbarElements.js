import styled from 'styled-components'
import logo from '../../images/logo.png'

export const Nav = styled.nav`

    background-color: rgba(255, 255, 255, 0.2);
    padding: 2px 50px;
    position: sticky;
    z-index: 999;
    box-shadow: 0px 2px 5px black;
`;

export const Navbarinbox = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

export const Navlogo = styled.div`

    background-image: url(${logo});
    background-size: cover;
    height: 70px;
    width: 200px;
`;

export const Navlist = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 55px; 
`;

export const Navitem = styled.li`

    list-style: none;
    text-decoration: none;
    font-size: 20px;
    font-weight: 900;
    color: #2b3180;
    padding: 0px 20px;
`;