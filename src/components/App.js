import React from 'react'
// import { injectGlobal } from 'styled-components'

import Navbar from './Navbar'
import Main from './Main'

/* injectGlobal`
  html {
    color: #292f33;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.3125;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0 auto;
  }

  svg {
    fill: currentColor;
    height: 1.25em;
  }

  @media screen and (min-width: 360px) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 600px) {
    html {
      font-size: 16px;
    }
  }
` */

const App = () => (
  <div>
    <Navbar />
    <Main />
  </div>
)

export default App