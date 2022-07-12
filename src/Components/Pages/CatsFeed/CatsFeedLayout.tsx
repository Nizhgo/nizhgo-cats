import React, {lazy, useEffect, useState, Suspense} from "react";
import BodyContainer from "../../../UiComponents/BodyContainer";
import {firebaseDatabase} from "../../../Firebase/firebaseConfig";
import Post, {IPost} from "../../../UiComponents/Post";
import {Posts} from "./Posts";
// const Posts = lazy(() => import("../../../Components/Pages/CatsFeed/Posts"));

const CatsFeedLayout = () =>
{

    return(
        <BodyContainer>
            <h1>Cats feed</h1>
            <p>Сat`s liked by users of NizhgoCats</p>
            <div style={{height:'20px'}}/>
            <Posts/>
        </BodyContainer>
    );
};


export default CatsFeedLayout;