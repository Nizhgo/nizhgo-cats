import BodyContainer from "../UI/BodyContainer";
import Card from "../UI/Card";
import {CardContainer, ErrorMsg, InputContainer} from "./LoginUi/LoginScreenUI";
import SingUpSticker from "../../Images/SignUp.gif";
import Input from "../UI/Input";
import Button from "../UI/Button";
import UnderlinedTextLink from "../UI/UnderlinedText";
import React, {useCallback, useContext, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {firebaseAuth} from "../../utils/firebaseConfig";
import {AuthContext} from "../Auth";

const SingUp = () =>
{
    const [errorText, setErrorText] = useState<string>();
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
            try{
                await firebaseAuth
                    .createUserWithEmailAndPassword(email.value, password.value)
            }
            catch(error: any) {
                const errorText = error.toString();
                setErrorText(errorText)
            }
    }, [])
    const {currentUser} = useContext(AuthContext)

    if (currentUser)
    {
        return (
            <Navigate to={'/nizhgo-cats/profile/'}/>
        )
    }
    return(
        <BodyContainer>
            <Card>
                <form onSubmit={handleSignUp}>
                    <CardContainer>
                        <h3 style={{paddingTop:'40px'}}>SignUp</h3>
                        <h5>Creating a new account</h5>
                        <img src={SingUpSticker} style={{height:'99px', width:'99px', marginInline:'auto', paddingTop:'20px'}}/>
                        {errorText ? <ErrorMsg>{errorText}</ErrorMsg>: ''}
                        <InputContainer>
                            <p>Email</p>
                            <Input type='email' name='email' required/>
                        </InputContainer>
                        <InputContainer>
                            <p>Password</p>
                            <Input  type='password' name='password' required/>
                        </InputContainer>
                        <Button type='submit' color='black' style={{backgroundColor:'#F2E362', fontWeight: 'bold', marginTop:'45px'}}>SignUp!</Button>
                        <Link to={'/nizhgo-cats/signin'} style={{marginTop:'30px'}}>
                            <UnderlinedTextLink>Do you have an account? SignIn!</UnderlinedTextLink>
                        </Link>
                    </CardContainer>
                </form>
            </Card>
        </BodyContainer>
    );
}
export default SingUp;