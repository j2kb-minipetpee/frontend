import React from 'react';
import { css, Global } from '@emotion/react';

const App = () => (
  <div>
    하이하이d123
    <Global styles={globalStyle}></Global>
  </div>
);

export default App;

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
  }

  ul {
    list-style: none;
  }
`;
