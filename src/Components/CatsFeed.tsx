import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import BodyContainer from "./UI/BodyContainer";
import {firebaseDatabase} from "../utils/firebaseConfig";
import {AuthContext} from "./Auth";
import Card from "./UI/Card";
import Img from "./UI/Img";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

interface LikedCatsDbFormat
    {
        uid: string,
        date: number,
        url: string,
        userName: string;
    }

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')
const CatsFeed = () =>
{
    const [likedCats, setLikedCats] = useState<LikedCatsDbFormat[]>([]);
    useEffect(() =>
    {
        const LikedCatsFromDb = firebaseDatabase.ref("liked_cats")
        LikedCatsFromDb.on('value', (snapshot) =>{
            const cats = snapshot.val();
            const LikedCatList: LikedCatsDbFormat[] = [];
            for (let id in cats)
            {
                LikedCatList.push(cats[id]);
            }
            const reversedList = LikedCatList.reverse();
            setLikedCats(reversedList);
        })
    }, [])
    return(
        <BodyContainer>
            <h1>Cats feed</h1>
            <p>Сats liked by users of NizhgoCats</p>
            <div style={{height:'20px'}}/>
            {likedCats.map((liked_cat_data) => {
                return (
                    <Card style={{paddingInline: '1.6em', fontFamily: 'Space Grotesk'}}>
                        <PostHeader>
                            <div style={{
                                    width: '41px',
                                    height: '41px',
                                    background: '#F2E362',
                                    borderRadius: '31px',}}/>
                            <div style={{paddingLeft: '10px', display:"flex", flexDirection:'column', justifyContent:'start'}}>
                                <p style={{fontSize:'14px', textAlign:'start'}}>{liked_cat_data.userName}</p>
                                <p style={{fontSize:'10px', fontWeight:'normal', textAlign:'start', color:'#8D8D8D', letterSpacing:'1,2em'}}>{timeAgo.format(Date.now() - (Date.now() - liked_cat_data.date))}</p>
                            </div>
                        </PostHeader>
                        <ImgContainer key={liked_cat_data.uid}>
                            <Img src={liked_cat_data.url}/>
                        </ImgContainer>
                    </Card>
                )
            })}
        </BodyContainer>
    );
};

async function getUserNameByUid(uid: string)
{
    const snapshot = await firebaseDatabase.ref(`users/${uid}/nickname`).once('value');
    return snapshot.val();
}


const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  margin-inline: auto;
  object-fit: scale-down;
  margin-bottom: 30px;
  margin-top: 10px;
  @media(max-width: 512px)
  {
    width: 100%;
  }
`;

const PostHeader = styled.div`
  padding-top: 12px;
    display: flex;
  
`;

export default CatsFeed;