import React from "react";
import BodyContainer from "../UI/BodyContainer";
import SingInSticker from "../../Images/SignInSticker.gif"
import Input from "../UI/Input";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styled from "styled-components";
import SigInBackground from "../../Images/SignInBackground.jpg"
import {CardContainer, InputContainer} from "./LoginUi/LoginScreenUI";
import UnderlinedTextLink from "../UI/UnderlinedText";
import {Link} from "react-router-dom";

const SignIn = () =>
{
    return(
        <BodyContainer>
            <Card>
                <CardContainer>
                    <h3 style={{paddingTop:'40px'}}>SignIn</h3>
                    <img src={SingInSticker} style={{height:'99px', width:'99px', marginInline:'auto', paddingTop:'20px'}}/>
                    <InputContainer>
                        <p>Email</p>
                        <Input type={'email'}/>
                    </InputContainer>
                    <InputContainer>
                        <p>Password</p>
                        <Input type={'password'}/>
                    </InputContainer>
                    <Button color='black' style={{backgroundColor:'#F2E362', fontWeight: 'bold', marginTop:'45px'}}>SignIn</Button>
                    <Link to={'/nizhgo-cats/signup'} style={{marginTop:'30px'}}>
                        <UnderlinedTextLink>Dont have an account? SignUp!</UnderlinedTextLink>
                    </Link>
                </CardContainer>
            </Card>
        </BodyContainer>
    );
}

export default SignIn;