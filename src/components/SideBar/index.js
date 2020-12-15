import React from 'react'
import {  SidebarContainer , Icon , CloseIcon , SidebarWrapper , SidebarMenu , SidebarLinks , SidebarBtnWrap , SidebarRouter } from './SideBarStyle'

const SideBar = ({isOpen , toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to="about" onClick={toggle}>About</SidebarLinks>
                    <SidebarLinks to="discover" onClick={toggle}>Discover</SidebarLinks>
                    <SidebarLinks to="services" onClick={toggle}>Services</SidebarLinks>
                    <SidebarLinks to="sing-up" onClick={toggle}>Sing Up</SidebarLinks>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRouter to="/sing-in">Sing In</SidebarRouter>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>            
    )
}

export default SideBar
