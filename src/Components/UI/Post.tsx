import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import Img from "./Img";
import Card from "./Card";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import {firebaseDatabase} from "../../utils/firebaseConfig";
import notliked from '../../Images/favorite_border_white_24dp(1).svg'
import like from '../../Images/like.svg'
import {AuthContext} from "../Auth";

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

export interface IPost {
    userUid: string,
    postUid?: string,
    date: number,
    //text?: string,
    pictureUrl: string
    likes: [],
}

const Post = (props: IPost) => {
    const [username, setUserName] = useState<string>('');
    const [userpic, setUserPic] = useState<string>('');
    useEffect(() =>
    {
        firebaseDatabase.ref(`users/${props.userUid}/nickname`).get().then(snapshot => {
            setUserName(snapshot.val())
        });
        firebaseDatabase.ref(`users/${props.userUid}/userpic`).get().then(snapshot => {
            setUserPic(snapshot.val())
        });
        
    }, []);
    return (
        <Card style={{paddingInline: '1.6em', paddingBottom:'1em', fontFamily: 'Space Grotesk'}}>
            <PostHeader>
                <Img style={{
                    width: '41px',
                    height: '41px',
                    background: '#F2E362',
                    borderRadius: '31px',
                }}
                src={userpic}/>
                <div style={{marginLeft: '10px', display: "flex", flexDirection: 'column', justifyContent: 'start'}}>
                    <p style={{fontSize: '14px', textAlign: 'start'}}>{username}</p>
                    <p style={{
                        fontSize: '10px',
                        fontWeight: 'normal',
                        textAlign: 'start',
                        color: '#8D8D8D',
                    }}>{timeAgo.format(Date.now() - (Date.now() - props.date))}</p>
                </div>
            </PostHeader>
            <ImgContainer>
                <Img src={props.pictureUrl}/>
            </ImgContainer>
            <Likes postUid={props.postUid || ''}/>
        </Card>
    )
}
interface ILikesPost {
    postUid: string,
}
const Likes = (props: ILikesPost ) =>
{
    const {currentUser} = useContext(AuthContext);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likesCount, setLikesCount] = useState<number>(-1);
    function text() {
        let textMsg = '';
        if (isLiked)
        {
            textMsg = 'Liked by you';
            if (likesCount > 1)
            {
                return (textMsg + ` and ${likesCount - 1} others`);
            }

        }
        else
        {
            return (likesCount.toString() + ' likes');
        }
    }
    const  likeClick = async () => {
        await firebaseDatabase.ref(`liked_cats/${props.postUid}/likes`).push(currentUser.uid);
    }
    const unLikeClick = async () => {
        await firebaseDatabase.ref(`liked_cats/${props.postUid}/likes`).once('value', snapshot => {
            snapshot.forEach((like) => {
                    if (like.val() === currentUser.uid) {
                        const key = like.key || "ops";
                        firebaseDatabase.ref(`liked_cats/${props.postUid}/likes`).child(key).remove().finally();
                    }
                }
            )
        })
    }
    useEffect(() =>
    {
        firebaseDatabase.ref(`liked_cats/${props.postUid}/likes`).on('value', snapshot =>
        {
            setLikesCount(snapshot.numChildren());
            snapshot.forEach((like) =>
                {
                    if (like.val() === currentUser.uid)
                    {
                        setIsLiked(true);
                    }
                    else
                    {
                        setIsLiked(false);
                    }
                }
            )
        })
    }, [])
    return(
        <div style={{display: 'flex', alignItems:'center', marginInline:'10px'}}>
            <Img style={{
                height:  '18px',
                width: '18px',
            }} src={isLiked ? like : notliked} onClick={!isLiked ? likeClick : unLikeClick}/>
            <p style={{
                fontSize: '10px',
                fontWeight: 'normal',
                textAlign: 'start',
                color: '#8D8D8D',
                marginInline:'10px'
            }}>
                {text()}
            </p>
        </div>
    )
}

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  margin-inline: auto;
  object-fit: scale-down;
  margin-bottom: 15px;
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

export default Post;