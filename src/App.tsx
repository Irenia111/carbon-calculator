import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
// original Windows95 font (optionally)
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import CarbonCalculator from './pages/CarbonCalculator';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
  }
`;

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <CarbonCalculator />
    </ThemeProvider>
  </>
);

export default App;
