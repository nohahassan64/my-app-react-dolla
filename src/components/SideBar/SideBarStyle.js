import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    position: fixed;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    left: 0;
    z-index: 999;
    background: #0d0d0d;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    transition: .5s ease-in-out;
`
export const Icon = styled.div`
    font-size: 2rem;
    background: transparent;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;
    outline: none;
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6 , 80px);
    text-align: center;
    list-style: none;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6 , 60px);
    }
`
export const SidebarLinks = styled(LinkS)`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all .5s ease-in-out;

    &:hover {
        color: #01bf71;
    }
`
export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;
export const SidebarRouter = styled(LinkR)`
   text-decoration: none;
    color: #010606;
    background: #01bf71;
    font-size: 16px;
    padding: 16px 64px;
    white-space: nowrap;
    border-radius: 50px;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
        transition: all .5s ease-in-out;
        background: #fff;
    }`