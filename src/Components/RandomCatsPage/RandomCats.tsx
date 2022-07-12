import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import Button from "../../UiComponents/Button";
import CatBtn from '../../Assets/Images/smiling-cat-face-with-heart-shaped-eyes-emoji-by-google.png';
import {firebaseAnalytics, firebaseDatabase} from "../../Firebase/firebaseConfig";
import BodyContainer from "../../UiComponents/BodyContainer";
import {AuthContext} from "../Contexts/AuthContext";
import Img from "../../UiComponents/Img";
import {ErrorMsg} from "../User/LoginUi/LoginScreenUI";
import {IPost} from "../../UiComponents/Post";
import useCatApi from "../../Hooks/useCatApi";


const RandomCats = () =>
{
    const {currentUser} = useContext(AuthContext);
    const {catImg, getCatImg, isLoading} = useCatApi();


    const LikeACat = () =>
    {
        firebaseAnalytics.logEvent("like_cat_button");
        if (currentUser)
        {
            if (!isLoading)
            {
                const liked_cat: IPost = {
                    date: Date.now(),
                    likes: [],
                    pictureUrl: catImg,
                    userUid: currentUser.uid

                }
                firebaseDatabase.ref().child('liked_cats').push(liked_cat);
                if (currentUser) firebaseDatabase.ref().child(`users/${currentUser.uid}/liked_cats`).push(liked_cat);
                getCatImg();
        }
        }
    }

    const NextCat = () =>
    {
        firebaseAnalytics.logEvent("next_cat_button");
        getCatImg();
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
                    <Img src={catImg}/>
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