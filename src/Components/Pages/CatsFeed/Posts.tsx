import React, {lazy, useEffect, useState, Suspense} from "react";
import {IPost} from "../../../UiComponents/Post";
import {firebaseDatabase} from "../../../Firebase/firebaseConfig";

const Post = lazy(() => import("../../../UiComponents/Post"));

export const Posts = () => {
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
    }, [])

    return(
        <>
            {
                likedCats.map((liked_cat_data) => {
                    return (
                        <Suspense fallback={<div>Loading...</div>}>
                        <Post  likes={liked_cat_data.likes}
                               pictureUrl={liked_cat_data.pictureUrl}
                               postUid={liked_cat_data?.postUid}
                            //text={liked_cat_data.text}
                               date={liked_cat_data.date}
                               userUid={liked_cat_data.userUid}
                               key={liked_cat_data?.postUid}
                        />
                        </Suspense>
                    )
                })
            }
        </>
    )
}