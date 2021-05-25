import 'antd/dist/antd.less';
import 'antd/lib/style/themes/default.less';
import 'nprogress/nprogress.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  form .anticon path {
    fill: #2A9D8F;
  }

  form .anticon.anticon-loading path {
    fill: #fff;
  }

  #nprogress {
    .bar {
      background: #2A9D8F;
    }
  }
`;

export default GlobalStyles;
