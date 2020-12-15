import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    position: sticky;
    top: 0;
    background: ${({scrollNav}) => scrollNav ? '#000' : 'transparent'};
    font-size: 1rem;
    z-index: 10;
    margin-top: -80px;

    @media screen and (max-width: 960px) {
        transition: all .5s ease-in-out
}
`;
export const NavbarContainer = styled.div`
    height: 80px;
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-self: flex-start;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    margin-left: 24px;
`;
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100% , 60%);
        font-size: 1.8rem;
        color: #fff;
        cursor: pointer;
    }
`;
export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const NavItem = styled.li`
    height: 80px;
`;
export const NavLinks = styled(LinkS)`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    padding: 0 1rem;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const NavBtnLink = styled(LinkR)`
    text-decoration: none;
    color: #010606;
    background: #01bf71;
    font-size: 16px;
    padding: 10px 22px;
    white-space: nowrap;
    border-radius: 50px;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
        transition: all .5s ease-in-out;
        background: #fff;
    }
`;