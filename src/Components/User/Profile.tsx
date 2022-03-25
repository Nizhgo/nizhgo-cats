import React, {useContext, useState} from "react";
import BodyContainer from "../UI/BodyContainer";
import {AuthContext} from "../Auth";
import Button from "../UI/Button";
import {firebaseAuth} from "../../utils/firebaseConfig";
import {Navigate} from "react-router-dom";
import {ErrorMsg} from "./LoginUi/LoginScreenUI";

const Profile = () =>
{
    const [errorText, setErrorText] = useState<string>();
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
                <p>
                    Work in progress
                </p>
                <div style={{height:'50px'}}/>
                <h4>Your email: {currentUser.email}</h4>
                <div style={{height:'20px'}}/>
                <Button onClick={() => firebaseAuth.signOut()} style={{background:'#F2E362'}}>
                    SignOut
                </Button>
                </BodyContainer>
    )
}

export default Profile;