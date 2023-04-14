import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarRoute, SidebarBtnWrap, SidebarMenu } from './SidebarMenuElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink>Use Cases</SidebarLink>
          <SidebarLink to='/about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='/pricing' onClick={toggle}>Pricing</SidebarLink>
          <SidebarLink to='/blog' onClick={toggle}>Blog</SidebarLink>
          <SidebarLink to='/login' onClick={toggle}>Login</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to='/signup'>Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;