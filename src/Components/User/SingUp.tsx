import BodyContainer from "../UI/BodyContainer";
import Card from "../UI/Card";
import {CardContainer, ErrorMsg, InputContainer} from "./LoginUi/LoginScreenUI";
import SingUpSticker from "../../Images/SignUp.gif";
import Input from "../UI/Input";
import Button from "../UI/Button";
import UnderlinedTextLink from "../UI/UnderlinedText";
import React, {useContext, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {firebaseAuth, firebaseDatabase} from "../../utils/firebaseConfig";
import {AuthContext} from "../Auth";
import {useForm} from "react-hook-form";

interface ISignUpForm{
    email: string,
    nickname: string,
    password: string
}
const SingUp = () => {
    const {register, handleSubmit} = useForm<ISignUpForm>();
    const [errorText, setErrorText] = useState<string>();
    const {currentUser} = useContext(AuthContext);

    const onSubmit = handleSubmit(async (formData) => {
        try {
            await firebaseAuth
                .createUserWithEmailAndPassword(formData.email, formData.password).then(
                    (key) => {
                        firebaseDatabase.ref().child(`users/${key.user?.uid}/email`).set(formData.email);
                        firebaseDatabase.ref().child(`users/${key.user?.uid}/nickname`).set(formData.nickname);
                        firebaseDatabase.ref().child(`users/${key.user?.uid}/userpic`).set('https://i.ibb.co/mv1X9hK/nizhgo-Cats.png');
                        firebaseDatabase.ref().child(`users/${key.user?.uid}/registration_date`).set(Date.now());
                        firebaseDatabase.ref().child(`users/${key.user?.uid}/viewed_cats`).set(0);
                    }
                )
        } catch (error: any) {
            const errorText = error.toString();
            setErrorText(errorText)
        }
    })

    if (currentUser) {
        return (
            <Navigate to={'/nizhgo-cats/profile/'}/>
        )
    }
    return (
        <BodyContainer>
            <Card>
                <form onSubmit={onSubmit}>
                    <CardContainer>
                        <h3 style={{paddingTop: '40px'}}>SignUp</h3>
                        <h5>Creating a new account</h5>
                        <img src={SingUpSticker}
                             style={{height: '99px', width: '99px', marginInline: 'auto', paddingTop: '20px'}}/>
                        {errorText ? <ErrorMsg>{errorText}</ErrorMsg> : ''}
                        <InputContainer>
                            <p style={{color:'#C9C9C9'}}>Email</p>
                            <Input type='email' {...register("email")} required/>
                        </InputContainer>
                        <InputContainer>
                            <p style={{color:'#C9C9C9'}}>Nickname</p>
                            <Input type='nickname' {...register("nickname")} required/>
                        </InputContainer>
                        <InputContainer>
                            <p style={{color:'#C9C9C9'}}>Password</p>
                            <Input type='password' {...register("password")} required/>
                        </InputContainer>
                        <Button type='submit' color='black' style={{
                            backgroundColor: '#F2E362',
                            fontWeight: 'bold',
                            marginTop: '45px'
                        }}>SignUp!</Button>
                        <Link to={'/nizhgo-cats/signin'} style={{marginTop: '30px'}}>
                            <UnderlinedTextLink>Do you have an account? SignIn!</UnderlinedTextLink>
                        </Link>
                    </CardContainer>
                </form>
            </Card>
        </BodyContainer>
    );
}
export default SingUp;