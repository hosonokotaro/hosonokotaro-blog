import React from 'react';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tech Blog | WEB DEVELOPER HOSONO KOTARO</title>
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto&display=swap);
        </style>
      </Helmet>
      <GlobalStyle />
      <Router>
        <Header />
        <Container />
        <Footer />
      </Router>
    </>
  );
};

export default hot(App);

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
    overflow-wrap: break-word;
  }

  body {
    font-family: 'Roboto', 'Noto Sans JP', sans-serif;
    line-height: 1;
    color: #333;
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  p {
    line-height: 1.5;
  }

  li {
    line-height: 1.5;
  }

  dt, dd {
    line-height: 1.5;
  }

  th, td {
    line-height: 1.5;
  }

  img {
    vertical-align: middle;
  }

  button {
    vertical-align: middle;
  }

  textarea {
    vertical-align: middle;
  }

  input {
    vertical-align: middle;
  }

  a {
    color: #f33;
  }
`;
