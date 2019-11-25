import React from 'react';
import Main from "./pages/Main"
import Tv from "./pages/Tv"
import Favorite from "./pages/Favorite.jsx"
import New from "./pages/New.jsx"
import { createGlobalStyle } from "styled-components"
import { BrowserRouter as Router, Route } from "react-router-dom"
const GlobalStyle = createGlobalStyle`
  html,body{
    margin:0;
    padding:0;
  }
  body{
    background-color:black;
  }
  a{
    text-decoration:none;
    color:white;
  }
`


function App() {
  return (
    <>
      <header>
        <GlobalStyle></GlobalStyle>
        <Router>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route exact path="/tv">
            <Tv></Tv>
          </Route>
          <Route exact path="/new">
            <New></New>
          </Route>
          <Route exact path="/favorite">
            <Favorite></Favorite>
          </Route>
        </Router>
      </header>
    </>
  );
}

export default App;
