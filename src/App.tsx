import React from 'react';
import './App.css';
import styled from "styled-components";
import {HeadStyled, TextStyled} from "./components/Text.styled";
import {MyBtn} from "./components/MyBtn.styled";
import pict from "./images/pict.png"
function App() {
  return (
      <div>
        <Card>
            <img src={pict} alt="pictures"/>
            <HeadStyled>Headline</HeadStyled>
            <TextStyled>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</TextStyled>
            <MyBtn primary>See more</MyBtn>
            <MyBtn outlined>Save</MyBtn>
        </Card>
    </div>
  );
}



export default App;

const Card=styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  img {
    margin-left: 10px;
    margin-top: 10px;
    margin-right: 10px;
    width: 280px;
    height: 170px;
    flex-shrink: 0;
    border-radius: 10px;
  }
`











