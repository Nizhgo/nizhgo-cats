import React from "react";
import styled from "styled-components";
import LogoImg from "../Images/NizhgoCatsLogo.svg"

const Header = () =>
{
    return(
    <HeaderContainer>
        <img src={LogoImg} alt={'logo'}/>
        <>
        </>
    </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
  margin-inline: 1.33em;;
  display: flex;
  padding: 21px 0;
  align-items: center;
  justify-content: center;
  /* ---> for
  @media(max-width: 645px) {
  flex-direction: column;
  justify-content: center;
  }
  */

`