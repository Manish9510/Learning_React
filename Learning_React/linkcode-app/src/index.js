import React from 'react';
import ReactDOM from 'react-dom';
import Style from './index.css';

let headStyle = {
  color:'darkblue',
  fontSize:'50px'
}

let dayCount=10;

let imgSrc="https://play-lh.googleusercontent.com/1aAb1Nyy3OcfwkV5i7yQUDL1lPVknpQp8qsYC7tPhJUukMiBNJwdiTEhNXq5qkZs0Kc"
let imgStyle={
  width:'30%',
  height:'30%'
}

ReactDOM.render(

  <div >
    <h1 style={headStyle}>Welcome To Linkcode Technologies</h1>
    <img src={imgSrc} alt='LinkCodeImg' style={imgStyle} 
    />
    <p>We are learning React and today is my Day {Math.round(Math.random()*10)}</p>
  </div>,
  document.getElementById("root")
)