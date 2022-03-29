import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import Button from "./UI/Button";
import CatBtn from '../Images/smiling-cat-face-with-heart-shaped-eyes-emoji-by-google.png';
import Loader from  '../Images/Loader.gif'
import {firebaseAnalytics, firebaseDatabase} from "../utils/firebaseConfig";
import BodyContainer from "./UI/BodyContainer";
import {AuthContext} from "./Auth";
import Img from "./UI/Img";
import {ErrorMsg} from "./User/LoginUi/LoginScreenUI";


const RandomCats = () =>
{
    const {currentUser, viewedCatsCount, setViewedCatsCount, userNickname} = useContext(AuthContext);
    const [catImgUrl, setCatImgUrl] = useState('');

    const GetCatImgUrlFromApi = async () => {
        firebaseAnalytics.logEvent("viewing_a_cat");
        if (currentUser) {setViewedCatsCount(viewedCatsCount + 1);}
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
        if (currentUser)
        {
            if (catImgUrl !== Loader)
            {
                const liked_cat = {
                    url: catImgUrl,
                    date: Date.now(),
                    userName: userNickname,
                }
                firebaseDatabase.ref().child('liked_cats').push(liked_cat);
                if (currentUser) firebaseDatabase.ref().child(`users/${currentUser.uid}/liked_cats`).push(liked_cat);
                GetCatImgUrlFromApi();
        }
        }
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
                    <Button onClick={() => LikeACat()} color={!currentUser ? '#4D5760':'#F2E362'}><Icon src={CatBtn} alt={'Meow!'} height={'20px'} width={'20px'}/></Button>
                </ButtonRow>
                { !currentUser ? <ErrorMsg style={{borderColor:'#4D5760', marginBottom:'20px', color:'#4D5760'}}>Only registered users can like kittens</ErrorMsg>:''}
                <ImgContainer>
                    <Img src={catImgUrl}/>
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
  width: 177px;
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