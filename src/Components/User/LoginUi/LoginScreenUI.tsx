import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  
  @media (max-width: 380px) {
    width: 270px;
  }

  @media (max-width: 350px) {
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
  }
  @media (max-width: 320px) {
    width: auto;
  }
  
`

const InputContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-items: center;
  
    p{
      font-weight: 400;
      font-size: 12px;
      color: #4D5760;
      margin-left: 15px;
    }
  `

export {CardContainer, InputContainer};