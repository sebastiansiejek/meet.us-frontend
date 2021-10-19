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

  .anticon path {
    fill: #2A9D8F;

    &[fill="#e6f7ff"] {
      fill: #beefe9;
    }
  }

  form .anticon.anticon-loading path {
    fill: #fff;
  }

  #nprogress {
    .bar {
      background: #2A9D8F;
    }

    .spinner-icon {
      border-top-color: #2A9D8F;
      border-left-color: #2A9D8F;
    }
  }

  .ant-table-content {
    overflow-x: scroll;
  }
`;

export default GlobalStyles;
