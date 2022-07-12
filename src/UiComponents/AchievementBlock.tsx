import styled from "styled-components";
import img from "./Img";
import React from "react";


interface IAchievementBlock {
    image: string,
    text: string,
    counter: any,
}

const AchievementBlock = (props: IAchievementBlock) => {
  return(
      <AchievementBlockDiv>
        <img src={props.image} style={{width:'24px', height:'24px'}}/>
          <Content>
            <Counter>
                {props.counter}
            </Counter>
              <Definition>
                  {props.text}
              </Definition>
          </Content>
      </AchievementBlockDiv>
  )
}

const AchievementBlockDiv = styled.div`
  width: 153px;
  height: 42px;
  border: 2px solid #F2E362;
  box-sizing: border-box;
  border-radius: 2px;
  display: flex;
  padding-inline: 10px;
  justify-items: center;
  align-items: center;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
`;

const Definition = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
`

const Counter = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
`;

export default AchievementBlock;