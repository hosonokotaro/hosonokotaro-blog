import { css } from '@linaria/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Pages from './pages/Pages';
import ScrollToTop from './utility/ScrollToTop';

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
      <Router>
        <ScrollToTop />
        <Header />
        <Pages />
        <Footer />
      </Router>
    </>
  );
};

export default hot(App);

export const globals = css`
  :global() {
    *,
    *:before,
    *:after {
      box-sizing: border-box;
      overflow-wrap: break-word;
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0px;
      padding: 0px;
      border: 0px;
      font: inherit;
      vertical-align: baseline;
    }

    menu,
    ol,
    ul {
      list-style: none;
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

    dt,
    dd {
      line-height: 1.5;
    }

    th,
    td {
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
  }
`;
