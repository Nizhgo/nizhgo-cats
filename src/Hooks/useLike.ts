import React, {useEffect} from "react";
// import {useFirebaseDB} from "./useFirebaseDB";
// import {IPost} from "../UiComponents/Post";
//
// interface IUseLike {
//     user: any;
// }
// export default function useLike(props: IUseLike)
// {
//     const { user } = props;
//     const {WriteToDB, ReadFromDB} = useFirebaseDB();
//
//     //record like cats to user firebase db
//     const LikeCat = (catImg: string) => {
//         const liked_cat: IPost = {
//             date: Date.now(),
//             likes: [],
//             pictureUrl: catImg,
//             userUid: user.uid
//         };
//         WriteToDB("liked_cats", liked_cat);
//         WriteToDB(`users/${user.uid}/liked_cats`,  liked_cat);
//     }
//
//     const LikePost = (post: IPost) => {
//         const [isLiked, setIsLiked] = React.useState(false);
//         useEffect(() => {
//             const likedPost = ReadFromDB(`liked_ca`);
//         }
//     }
// }