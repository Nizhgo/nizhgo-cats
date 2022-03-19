import styled from "styled-components";

const Button  = styled.button`{
  font-family: 'Space Mono', monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 5px;
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  cursor: pointer;
  background-color: Transparent;
  color: ${props => props.color};
  

  :active {
    color: #F2E362;
    border-color: #F2E362;
  }
}`;

export default Button;