import React from 'react';
import './App.css';
import RandomCats from "./Components/RandomCats";
import styled from "styled-components";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LikedCats from "./Components/LikedCats";
import SingIn from "./Components/User/SingIn";
function App() {
  return (
      <BrowserRouter>
          <PageRoot>
              <Header/>
              <Routes>
                  <Route path="/nizhgo-cats/" element={<RandomCats/>} />
                  <Route path="nizhgo-cats/liked-cats" element ={<LikedCats/>} />
                  <Route path="nizhgo-cats/login" element ={<SingIn/>} />
              </Routes>
          </PageRoot>
      </BrowserRouter>
  );
}

const PageRoot = styled.div`
display: flex;
flex-direction: column;
max-width: 1440px;
margin: auto`


export default App;
