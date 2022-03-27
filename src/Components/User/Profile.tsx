import React, {useContext, useState} from "react";
import BodyContainer from "../UI/BodyContainer";
import {AuthContext} from "../Auth";
import Button from "../UI/Button";
import {firebaseAuth} from "../../utils/firebaseConfig";
import {Navigate} from "react-router-dom";
import {CardContainer} from "./LoginUi/LoginScreenUI";
import Card from "../UI/Card";

const Profile = () =>
{
    const {currentUser} = useContext(AuthContext)
    if (!currentUser)
    {
        return (
            <Navigate to={'/nizhgo-cats/'}/>
        )
    }
    return(
            <BodyContainer>
                <h2>Profile page</h2>
                <p>work in progress</p>
                <Card style={{marginTop: '20px'}}>
                    <CardContainer>
                        <div style={{height:'30px'}}/>
                        <p style={{textAlign:"left", fontWeight:'bold', fontSize:'18px'}}>{currentUser.email}</p>
                        <p style={{textAlign:"left", fontWeight:'bold', fontSize:'10px', color:'#8D8D8D'}}>{currentUser.uid}</p>
                        <div style={{height:'100px'}}/>
                        <Button onClick={() => firebaseAuth.signOut()} style={{background:'#F2E362', color:'black'}}>
                            SignOut
                        </Button>
                    </CardContainer>
                </Card>
                </BodyContainer>
    )
}

export default Profile;