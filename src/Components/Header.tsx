import React from "react";
import styled from "styled-components";
import LogoImg from "../Images/NizhgoCatsLogo.svg"
import { Link} from "react-router-dom";
const Header = () =>
{
    return(
    <HeaderContainer>
        <Link to={'/'}>
            <img src={LogoImg} alt={'logo'}/>
        </Link>
        <div style={{width:'128px'}}/>
        <NavScrollContainer>
                <Menu>
                    <Link to={'/'}>
                        <MenuItem>
                            <NavOption>Random-cats!!</NavOption>
                        </MenuItem>
                    </Link>
                    <Link to={'liked-cats/'}>
                        <MenuItem>
                            <NavOption>Liked cats</NavOption>
                        </MenuItem>
                    </Link>
                </Menu>
        </NavScrollContainer>
    </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
  margin-inline: 10px;;
  display: flex;
  padding: 21px 0;
  align-items: center;
  justify-content: flex-start;

  @media(max-width: 645px) {
  flex-direction: column;
  justify-content: center;
  }
`

const NavScrollContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: table-row-group;
  @media(max-width: 1024px){
    padding-top: 15px;
  }
    `;


const Menu = styled.menu`
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
  @media(max-width: 1024px){
    justify-content: center;
  }
    `;

const MenuItem = styled.li`
  margin-inline: 20px;
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