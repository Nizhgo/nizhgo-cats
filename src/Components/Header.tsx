import React, {useState} from "react";
import styled from "styled-components";
import LogoImg from "../Images/NizhgoCatsLogo.svg"
import {Link, NavLink} from "react-router-dom";
import MenuIcon from "../Images/menu_white_24dp.svg"
import LoginIcon from  "../Images/person_outline_white_24dp.svg";
import CloseIcon from "../Images/close_white_24dp.svg"
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
            <Link to={'/nizhgo-cats/signin/'}>
                <LoginContainer>
                    <NavOption style={{marginRight:'10px'}}>SignIn</NavOption>
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
interface Props {
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const MeunuItems = (props?: Props) =>
{
    const setIsOpen = props?.setIsOpen;
    return(
        <>
            <Link to={'/nizhgo-cats/'}>
                <MenuItem onClick={() => setIsOpen ? setIsOpen(false) : ''}>
                    <NavOption>Random cats!</NavOption>
                </MenuItem>
            </Link>
            <Link to={'/nizhgo-cats/liked-cats/'}>
                <MenuItem onClick={() => setIsOpen ? setIsOpen(false) : () => (console.log('click'))}>
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
        <HamburgerMenuWrapper>
            <img src={MenuIcon} onClick={() => setIsOpen(isOpen => !isOpen)}/>
            {isOpen && <HamburgerMenuContent>
                <img src={CloseIcon} onClick={() => setIsOpen(isOpen => !isOpen)}/>
                <div style={{height:'30px'}}/>
                <MeunuItems setIsOpen={setIsOpen}/>
            </HamburgerMenuContent>}
        </HamburgerMenuWrapper>
    );
}

const HamburgerMenuContent = styled.div`
  padding-left: 20px;
  padding-top: 21px;
    position: fixed;
  height: 100vh;     
  width: 100%;
  left: 0;
  top: 0;
  background-color: black;
`

const HamburgerMenuWrapper = styled.div`
  display: none;
  @media(max-width:645px)
  {
    display: block;
  }`

const LogoContainer = styled.div`
  height: 36px;
  width: 173px;
  position: initial;
  display: flex;
  
  @media(max-width:645px)
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

  
@media(max-width: 645px) {
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
  margin-inline: 15px;
  @media(max-width: 645px){
    display: block;
    margin-inline: 0;
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
    background-color: black;
  }
    `;

const MenuItem = styled.div`
  margin-left: 35px;
  color: #f6f6f6;
  
  @media(max-width: 645px){
    margin-left: 0;
    margin-top: 20px;
    font-size: 20px;
  }
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