import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 40px;
  padding-bottom: 40px;
  
  @media (max-width: 410px) {
    width: auto;
  }
  
`

const InputContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  text-align: start;
  display: flex;
  flex-direction: column;
  
    p{
      font-weight: 400;
      font-size: 12px;
      color: #4D5760;
      margin-left: 15px;
    }
  `

export {CardContainer, InputContainer};