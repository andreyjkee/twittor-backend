import { injectGlobal } from 'react-emotion';

const Global = injectGlobal`
  html {
    min-height: 100%;
    position: relative;
  }
  
  body {
    margin-bottom: 80px;
  }
`;

export default Global;
