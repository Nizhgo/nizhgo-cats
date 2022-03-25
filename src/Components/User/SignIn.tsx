import React, {useCallback, useContext, useState} from "react";
import BodyContainer from "../UI/BodyContainer";
import SingInSticker from "../../Images/SignInSticker.gif"
import Input from "../UI/Input";
import Button from "../UI/Button";
import Card from "../UI/Card";
import {CardContainer, ErrorMsg, InputContainer} from "./LoginUi/LoginScreenUI";
import UnderlinedTextLink from "../UI/UnderlinedText";
import {Link} from "react-router-dom";
import {firebaseAuth} from "../../utils/firebaseConfig";
import {AuthContext} from "../Auth";
import {Navigate} from "react-router-dom";

const SignIn = () =>
{
    const [errorText, setErrorText] = useState<string>();
    const handleSignIn = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try{
            await firebaseAuth
                .signInWithEmailAndPassword(email.value, password.value)
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
                <form onSubmit={handleSignIn}>
                <CardContainer>
                        <h3 style={{paddingTop:'40px'}}>SignIn</h3>
                        <img src={SingInSticker} style={{height:'99px', width:'99px', marginInline:'auto', paddingTop:'20px'}}/>
                    {errorText ? <ErrorMsg>{errorText}</ErrorMsg>: ''}
                        <InputContainer>
                            <p>Email</p>
                            <Input type='email' name='email' required/>
                        </InputContainer>
                        <InputContainer>
                            <p>Password</p>
                            <Input type='password' name='password' required/>
                        </InputContainer>
                        <Button type='submit' color='black' style={{backgroundColor:'#F2E362', fontWeight: 'bold', marginTop:'45px'}}>SignIn</Button>
                        <Link to={'/nizhgo-cats/signup'} style={{marginTop:'30px'}}>
                            <UnderlinedTextLink>Dont have an account? SignUp!</UnderlinedTextLink>
                        </Link>
                </CardContainer>
                </form>
            </Card>
        </BodyContainer>
    );
}

export default SignIn;