import React, {useContext, useState} from "react";
import BodyContainer from "../../UiComponents/BodyContainer";
import {AuthContext} from "../Contexts/AuthContext";
import Button from "../../UiComponents/Button";
import {firebaseAuth, firebaseDatabase} from "../../Firebase/firebaseConfig";
import {Navigate} from "react-router-dom";
import {CardContainer} from "./LoginUi/LoginScreenUI";
import AchievementBlock from "../../UiComponents/AchievementBlock";
import Card from "../../UiComponents/Card";
import styled from "styled-components";
import LkdCats from "../../Assets/Images/liked-cts.png"
import Cats from '../../Assets/Images/white-cat.png'
import Img from "../../UiComponents/Img";

const Profile = () =>
{
    const {currentUser, viewedCatsCount, userNickname, likedCatsCount, userpic} = useContext(AuthContext);
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
                        <div style={{display:'flex', justifyContent:"start", alignItems:'center'}}>
                            <Img style={{
                                width: '56px',
                                height: '56px',
                                background: '#F2E362',
                                borderRadius: '46px',
                                alignItems: "start"}}
                            src={userpic}/>
                            <div style={{paddingLeft:'16px'}}>
                                <ProfileText style={{fontSize:'18px'}}>{userNickname}</ProfileText>
                                <ProfileText style={{fontSize:'10px', color:'#8D8D8D'}}>{currentUser.uid}</ProfileText>
                            </div>
                        </div>
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