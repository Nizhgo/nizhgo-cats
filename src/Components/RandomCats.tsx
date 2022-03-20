import React, {useState} from "react";
import styled from "styled-components";
import Button from "./Button";
import CatBtn from '../Images/smiling-cat-face-with-heart-shaped-eyes-emoji-by-google.png';
import Loader from  '../Images/Loader.gif'
import {firebaseAnalytics} from "../utils/firebaseConfig";


function RandomCats()
{
    const [imgUrl, setUrl] = useState('');
    const catImg = async () => {
        firebaseAnalytics.logEvent("viewing_a_cat");
        setUrl(Loader);
        await fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(data => setUrl(data[0].url))
    }
    return(
        <CatGeneratorContainer>
            <h1>Random cats!🐈</h1>
            <CatsGenerator>
                <ButtonRow>
                    <Button onClick={() => catImg()} color={'#F6F6F6'}>🎀 Next! 🎀</Button>
                    <Button onClick={() => catImg()} color={'#F2E362'}><Icon src={CatBtn} alt={'Meow!'} height={'20px'} width={'20px'}/></Button>
                </ButtonRow>
                <ImgContainer>
                    <CatImg src={imgUrl} alt={'catImg'}/>
                </ImgContainer>
            </CatsGenerator>
        </CatGeneratorContainer>
    )
}

const CatGeneratorContainer = styled.div`{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  letter-spacing: 1px;
  flex-shrink: 0;
  
}`;

const Icon = styled.img`
  display: flex;
  margin: 4px;
`

const  CatImg = styled.img`{
  image-rendering: high-quality;
  max-width: 100%;
  max-height: 100%;
}`;

const ImgContainer = styled.div`
  height: 55vh;
  object-fit: scale-down;
  
`

const ButtonRow = styled.div`
  display: flex;
  width: 172px;
  justify-content: space-between;
  margin-bottom: 24px;
`

const CatsGenerator = styled.div`
  margin-top: 24px;
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  
  @media(max-width: 1024px){
    flex-direction: column-reverse;
    width: 100%;
    
    button{
      margin-top: 40px;
    }
  }
`

export default RandomCats;