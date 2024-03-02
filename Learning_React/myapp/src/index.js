// const h1 = document.createElement('h1')
// h1.innerHTML='I am learning React js';

// document.getElementById("root").appendChild(h1)

//index.html > directly
//external .js ? traditional js use
//React

import React, { Fragment } from 'react';
import ReactDOM  from 'react-dom';

ReactDOM.render(
  <> 
  <h1>I am learning React js</h1>
  <h2>Day 1</h2>
  <h2>Day 1</h2>
  <h2>Day 1</h2>
  </>,
  document.getElementById("root")
  // ()=>console.log("rendered")
);