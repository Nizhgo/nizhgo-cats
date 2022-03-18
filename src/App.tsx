import React from 'react';
import './App.css';
import RandomCats from "./Components/RandomCats";
import styled from "styled-components";
import Header from "./Components/Header";

function App() {
  return (
    <PageRoot>
      <Header/>
      <RandomCats/>
    </PageRoot>
  );
}

const PageRoot = styled.div`
display: flex;
flex-direction: column;
max-width: 1440px;
margin: auto`


export default App;
