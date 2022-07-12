import React from 'react';
import './App.css';
import RandomCats from "./Components/RandomCatsPage/RandomCats";
import styled from "styled-components";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CatsFeedLayout from "./Components/Pages/CatsFeed/CatsFeedLayout";
import SignIn from "./Components/User/SignIn";
import SingUp from "./Components/User/SingUp";
import {AuthProvider} from "./Components/Contexts/AuthContext";
import Profile from "./Components/User/Profile";
function App() {
  return (
      <AuthProvider>
          <BrowserRouter>
              <PageRoot>
                  <Header/>
                  <Routes>
                      <Route path="/nizhgo-cats" element={<RandomCats/>} />
                      <Route path="nizhgo-cats/feed" element ={<CatsFeedLayout/>} />
                      <Route path="nizhgo-cats/signin" element ={<SignIn/>} />
                      <Route path="nizhgo-cats/signup" element ={<SingUp/>} />
                      <Route path="/nizhgo-cats/profile" element ={<Profile/>} />
                      <Route path="*" element ={<Profile/>} />
                  </Routes>
              </PageRoot>
          </BrowserRouter>
      </AuthProvider>
  );
}


const PageRoot = styled.div`
display: flex;
flex-direction: column;
max-width: 1440px;
margin: auto`


export default App;
