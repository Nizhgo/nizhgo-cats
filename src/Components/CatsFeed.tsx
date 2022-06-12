import React, {useEffect, useState} from "react";
import BodyContainer from "./UI/BodyContainer";
import {firebaseDatabase} from "../utils/firebaseConfig";
import Post, {IPost} from "./UI/Post";


const CatsFeed = () =>
{
    const [likedCats, setLikedCats] = useState<IPost[]>([]);
    useEffect(() =>
    {
        firebaseDatabase.ref("/liked_cats/").once('value').then((snapshot) =>{
            const cats = snapshot.val();
            const LikedCatList: IPost[] = [];
            for (let id in cats)
            {
                cats[id].postUid = id;
                LikedCatList.push(cats[id]);
            }
            setLikedCats(LikedCatList.reverse());
        })
    })
    return(
        <BodyContainer>
            <h1>Cats feed</h1>
            <p>Сat`s liked by users of NizhgoCats</p>
            <div style={{height:'20px'}}/>
            {likedCats.map((liked_cat_data) => {
                return (
                    <Post  likes={liked_cat_data.likes}
                           pictureUrl={liked_cat_data.pictureUrl}
                           postUid={liked_cat_data?.postUid}
                           //text={liked_cat_data.text}
                           date={liked_cat_data.date}
                           userUid={liked_cat_data.userUid}
                           key={liked_cat_data?.postUid}
                    />
                )
            })}
        </BodyContainer>
    );
};


export default CatsFeed;