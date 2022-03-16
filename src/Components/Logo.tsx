import React from "react";
import styled from "styled-components";

const Logo = () =>
{
    return(
        <Logotype>NizhgoCats</Logotype>
    );
}

const Logotype = styled.h1`{
  display: flex;
  justify-content: center;
  margin-inline: auto;
  margin-top: 25px;
  width: 173px;
  font-size: 24px;
  font-weight: 800;
  color: #F2E362;
  background-color: black;
}`;

export default Logo;