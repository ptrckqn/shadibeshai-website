import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import NavBar from './NavBar';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    *, *::before, *::after{
        box-sizing: inherit;
    }
    html{
        box-sizing: border-box;
        width: 100%;
    }

    body{
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont,
        "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    }
    h1{
      font-size: 48px;
      margin-bottom: 8px;
    }

    h2{
      font-size: 36px;
      line-height: 44.5px;
    }

    h3{
      font-size: 22px;
    }

    p, i, a{
      font-size: 18px;
      line-height: 1.58;
    }

    a {
      text-decoration: underline;
    }

    blockquote{
      font-size: 30px;
      font-style: italic;
      letter-spacing: -0.36px;
      line-height: 44.4px;
      overflow-wrap: break-word;
      color: rgba(0, 0, 0, 0.68);
    }

    code{
      font-size: 18px;
      background: rgba(0,0,0,.05);
      border-radius: 2px;
    }
`;

const Main = styled.main`
  margin-top: 140px;
  padding-top: 60px;
`;

const Layout = ({ title, children }) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>Dr. Shadi Beshai - {title}</title>
      </Helmet>
      <NavBar />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
