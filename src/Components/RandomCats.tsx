import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Button from "./UI/Button";
import CatBtn from '../Images/smiling-cat-face-with-heart-shaped-eyes-emoji-by-google.png';
import Loader from  '../Images/Loader.gif'
import {firebaseAnalytics, firebaseDatabase} from "../utils/firebaseConfig";
import BodyContainer from "./UI/BodyContainer";


const RandomCats = () =>
{
    const [catImgUrl, setCatImgUrl] = useState('');
    const GetCatImgUrlFromApi = async () => {
        firebaseAnalytics.logEvent("viewing_a_cat");
        setCatImgUrl(Loader);
        await fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(data => setCatImgUrl(data[0].url))
    }
        useEffect(() => {
            GetCatImgUrlFromApi();
        }, []);

    const LikeACat = () =>
    {
        firebaseAnalytics.logEvent("like_cat_button");
        const liked_cat = {
            url: catImgUrl,
            date: Date.now(),
        }
        firebaseDatabase.ref().child('liked_cat').push(liked_cat);
        GetCatImgUrlFromApi();
    }

    const NextCat = () =>
    {
        firebaseAnalytics.logEvent("next_cat_button");
        GetCatImgUrlFromApi();
    }

    return(
        <BodyContainer>
            <h1>Random cats!🐈</h1>
            <CatsGenerator>
                <ButtonRow>
                    <Button onClick={() => NextCat()} color={'#F6F6F6'}>🎀 Next! 🎀</Button>
                    <Button onClick={() => LikeACat()} color={'#F2E362'}><Icon src={CatBtn} alt={'Meow!'} height={'20px'} width={'20px'}/></Button>
                </ButtonRow>
                <ImgContainer>
                    <CatImg src={catImgUrl}/>
                </ImgContainer>
            </CatsGenerator>
        </BodyContainer>
    )
}

export default RandomCats;

const Icon = styled.img`
  display: flex;
  margin: 4px;
`;

const  CatImg = styled.img`
  image-rendering: high-quality;
  max-width: 100%;
  max-height: 100%;
`;

const ImgContainer = styled.div`
  height: 55vh;
  object-fit: scale-down;
  @media(max-width: 512px)
  {
    height: 50vh;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  width: 172px;
  justify-content: space-between;
  margin-bottom: 24px;
`;

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
  }`