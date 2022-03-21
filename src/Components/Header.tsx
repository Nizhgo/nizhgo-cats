import React, {useState} from "react";
import styled from "styled-components";
import LogoImg from "../Images/NizhgoCatsLogo.svg"
import {Link, NavLink} from "react-router-dom";
import MenuIcon from "../Images/menu_white_24dp.svg"
import LoginIcon from  "../Images/person_outline_white_24dp.svg";
const Header = () =>
{
    return(
    <HeaderContainer>
        <NavBar>
            <HamburgerMenu/>
            <NavScrollContainer>
                <Menu>
                    <MeunuItems/>
                </Menu>
            </NavScrollContainer>
            <Link to={'/nizhgo-cats/login/'}>
                <LoginContainer>
                    <NavOption>Login</NavOption>
                    <img src={LoginIcon}/>
                </LoginContainer>
            </Link>
        </NavBar>
        <LogoContainer>
            <Link to={'/nizhgo-cats/'}>
                <img src={LogoImg} alt={'logo'}/>
            </Link>
        </LogoContainer>
    </HeaderContainer>
    );
}

const MeunuItems = () =>
{
    return(
        <>
            <Link to={'/nizhgo-cats/'}>
                <MenuItem>
                    <NavOption>Random cats!</NavOption>
                </MenuItem>
            </Link>
            <Link to={'/nizhgo-cats/liked-cats/'}>
                <MenuItem>
                    <NavOption>Liked cats!</NavOption>
                </MenuItem>
            </Link>
        </>

    )
}

const HamburgerMenu = () =>
{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <HamburgerMenuWrapper>
                <img src={MenuIcon} onClick={() => setIsOpen(isOpen => !isOpen)}/>
                {isOpen &&
                    <MeunuItems/>
                }
            </HamburgerMenuWrapper>
        </>
    );
}

const HamburgerMenuWrapper = styled.div`

  @media(min-width: 645px){
    display: none;
  }
`

const LogoContainer = styled.div`
  height: 36px;
  width: 173px;
  position: initial;
  display: flex;
  
  @media(max-width:613px)
  {
    position: relative;
    text-align: center;
    margin-inline: auto;
    margin-top: -5px;
    top: 50%
  }
`

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  
@media(max-width: 613px) {
  position: absolute;
  width: calc(100% - 40px);
  margin-inline: 20px;
}
`

const LoginContainer = styled.div`
display: flex;
  @media(max-width: 645px){
    li{
      display: none;
    }
  }
`

const HeaderContainer = styled.div`
  display: flex;
  padding: 21px 0;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  @media(max-width: 645px){
    display: block;
  }
`

const NavScrollContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 645px){
    display: none;
  }
    `;


const Menu = styled.menu`
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
  @media(max-width: 645px){
    flex-direction: column;
  }
    `;

const MenuItem = styled.li`
  margin-left: 35px;
  color: #f6f6f6;
`

const NavOption = styled.li`
  {
    font-size: 16px;
    font-weight: 500;
    color: #f6f6f6;
    list-style: none;
    
    :hover
    {
      transition: 400ms linear;
      color: #F2E362;
    }
  }`;

export default Header;