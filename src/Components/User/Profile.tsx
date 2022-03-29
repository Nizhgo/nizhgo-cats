import React, {useContext, useState} from "react";
import BodyContainer from "../UI/BodyContainer";
import {AuthContext} from "../Auth";
import Button from "../UI/Button";
import {firebaseAuth, firebaseDatabase} from "../../utils/firebaseConfig";
import {Navigate} from "react-router-dom";
import {CardContainer} from "./LoginUi/LoginScreenUI";
import AchievementBlock from "../UI/AchievementBlock";
import Card from "../UI/Card";
import styled from "styled-components";
import LkdCats from  "../../Images/liked-cts.png"
import Cats from '../../Images/white-cat.png'

const Profile = () =>
{
    const {currentUser, viewedCatsCount, userNickname, likedCatsCount} = useContext(AuthContext);
    if (!currentUser) {
        return (
            <Navigate to={'/nizhgo-cats/'}/>
        )
    }
    return(
            <BodyContainer>
                <h2>Profile page</h2>
                <p>work in progress</p>
                <Card>
                    <CardContainer>
                        <div style={{height:'30px'}}/>
                        <ProfileText style={{fontSize:'18px'}}>{userNickname}</ProfileText>
                        <ProfileText style={{fontSize:'10px', color:'#8D8D8D'}}>{currentUser.uid}</ProfileText>
                        <ProfileText style={{fontSize:'12px', marginTop:'10px'}}>email: {currentUser.email}</ProfileText>
                        <div style={{height:'70px'}}/>
                        <ProfileText style={{fontSize: '18px', backgroundColor:'#F2E362', color:'black', paddingLeft: '5px', maxWidth:'250px'}}>Your achievements</ProfileText>
                        <div style={{display:'flex', marginTop:'30px'}}>
                            <AchievementBlock image={Cats} counter={viewedCatsCount} text={'viewed cats'}/>
                            <div style={{width: '20px'}}/>
                            <AchievementBlock image={LkdCats} counter={likedCatsCount} text={'liked cats!'}/>
                        </div>
                        <div style={{height: '45px'}}/>
                        <Button onClick={() => firebaseAuth.signOut()} style={{background:'#F2E362', color:'black'}}>
                            SignOut
                        </Button>
                    </CardContainer>
                </Card>
                </BodyContainer>
    )
}

const ProfileText = styled.p`
text-align: left;
  font-weight: bold;
  font-size: 14px;
`
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 400px;
  padding: 30px;

  @media(max-width: 512px)
{
  width: 100%;
    padding: 0px;
}
`
export default Profile;