import React, {useEffect, useState} from "react";
import styled from "styled-components";
import BodyContainer from "./UI/BodyContainer";
import {firebaseDatabase} from "../utils/firebaseConfig";
interface LikedCatsDbFormat
    {
        date: number,
        url: string,
    }
const LikedCats = () =>
{
    const [likedCats, setLikedCats] = useState<LikedCatsDbFormat[]>([]);
    useEffect(() =>
    {
        const LikedCatsFromDb = firebaseDatabase.ref("liked_cat")
        LikedCatsFromDb.on('value', (snapshot) =>{
            const cats = snapshot.val();
            const LikedCatList: LikedCatsDbFormat[] = [];
            for (let id in cats)
            {
                LikedCatList.push(cats[id]);
            }
            setLikedCats(LikedCatList);
            console.log(likedCats);
        })
    }, [])
    return(
        <BodyContainer>
            <h1>Liked cats</h1>
            <div style={{height:'20px'}}/>
            {likedCats.map((liked_cat_data) => {
                return (<ImgContainer>
                    <Img src={liked_cat_data.url}/>
                    <p>{Intl.DateTimeFormat('ru', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(liked_cat_data.date)}</p>
                </ImgContainer>)
            })}
        </BodyContainer>
    );
};

const  Img = styled.img`
  image-rendering: high-quality;
  max-width: 100%;
  max-height: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  object-fit: scale-down;
  margin-top: 30px;
  margin-bottom: 30px;

  @media(max-width: 512px)
  {
    width: 100%;
  }
`;

export default LikedCats;