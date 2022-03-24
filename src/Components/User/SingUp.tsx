import BodyContainer from "../UI/BodyContainer";
import Card from "../UI/Card";
import {CardContainer, InputContainer} from "./LoginUi/LoginScreenUI";
import SingUpSticker from "../../Images/SignUp.gif";
import Input from "../UI/Input";
import Button from "../UI/Button";
import UnderlinedTextLink from "../UI/UnderlinedText";
import React from "react";
import {Link} from "react-router-dom";

const SingUp = () =>
{
    return(
        <BodyContainer>
            <Card>
                <CardContainer>
                    <h3 style={{paddingTop:'40px'}}>SignUp</h3>
                    <h5>Creating a new account</h5>
                    <img src={SingUpSticker} style={{height:'99px', width:'99px', marginInline:'auto', paddingTop:'20px'}}/>
                    <InputContainer>
                        <p>Email</p>
                        <Input type={'email'}/>
                    </InputContainer>
                    <InputContainer>
                        <p>Password</p>
                        <Input/>
                    </InputContainer>
                    <Button color='black' style={{backgroundColor:'#F2E362', fontWeight: 'bold', marginTop:'45px'}}>SignUp!</Button>
                    <Link to={'/nizhgo-cats/signin'} style={{marginTop:'30px'}}>
                        <UnderlinedTextLink>Do you have an account? SignIn!</UnderlinedTextLink>
                    </Link>
                </CardContainer>
            </Card>
        </BodyContainer>
    );
}
export default SingUp;