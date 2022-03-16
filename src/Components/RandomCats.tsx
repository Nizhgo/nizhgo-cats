import React, {useState} from "react";
import styled from "styled-components";
import Button from "./Button";

function RandomCats()
{
    const [imgUrl, setUrl] = useState()
    const catImg = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(data => setUrl(data[0].url))
    }
    return(
        <CatGeneratorContainer>
            <h1>Random cats!🐈</h1>
            <CatsGenerator>
                <Button onClick={() => catImg()}>Meow!</Button>
                <CatImg src={imgUrl}/>
            </CatsGenerator>
        </CatGeneratorContainer>
    )
}

const CatGeneratorContainer = styled.div`{
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  padding-top: 20px;
}`;
const  CatImg = styled.img`{
  height: 50vh;
}`;

const CatsGenerator = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  align-items: center;
  
  @media(max-width: 1024px){
    flex-direction: column-reverse;
    
    button{
      margin-top: 40px;
    }
  }
`

export default RandomCats;