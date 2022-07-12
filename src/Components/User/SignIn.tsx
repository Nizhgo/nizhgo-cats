import React, {useContext, useState} from "react";
import BodyContainer from "../../UiComponents/BodyContainer";
import SingInSticker from "../../Assets/Images/SignInSticker.gif"
import Input from "../../UiComponents/Input";
import Button from "../../UiComponents/Button";
import Card from "../../UiComponents/Card";
import {CardContainer, ErrorMsg, InputContainer} from "./LoginUi/LoginScreenUI";
import UnderlinedTextLink from "../../UiComponents/UnderlinedText";
import {Link} from "react-router-dom";
import {firebaseAuth, firebaseDatabase} from "../../Firebase/firebaseConfig";
import {AuthContext} from "../Contexts/AuthContext";
import {Navigate} from "react-router-dom";
import {useForm} from "react-hook-form";
interface signInForm{
    email: string,
    password: string,
}

const SignIn = () =>
{
    const {register, handleSubmit} = useForm<signInForm>();
    const [errorText, setErrorText] = useState<string>();
    const {currentUser} = useContext(AuthContext);

    const onSubmit = handleSubmit(async (formData) => {
        try {
            await firebaseAuth
                .signInWithEmailAndPassword(formData.email, formData.password).then(
                    (key) => {
                        firebaseDatabase.ref(`users/${key.user?.uid}/authorization_time`).push(Date.now());
                    }
                )
        } catch (error: any) {
            const errorText = error.toString();
            setErrorText(errorText)
        }
    })

    if (currentUser)
    {
        return (
            <Navigate to={'/nizhgo-cats/profile/'}/>
        )
    }
    return(
        <BodyContainer>
            <Card>
                <form onSubmit={onSubmit}>
                <CardContainer>
                        <h3 style={{paddingTop:'40px'}}>SignIn</h3>
                        <img src={SingInSticker} style={{height:'99px', width:'99px', marginInline:'auto', paddingTop:'20px'}}/>
                    {errorText ? <ErrorMsg>{errorText}</ErrorMsg>: ''}
                        <InputContainer>
                            <p style={{color:'#C9C9C9'}}>Email</p>
                            <Input type='email' {...register('email')} required/>
                        </InputContainer>
                        <InputContainer>
                            <p style={{color:'#C9C9C9'}}>Password</p>
                            <Input type='password' {...register('password')} required/>
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