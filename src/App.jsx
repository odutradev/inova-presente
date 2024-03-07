import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from './routes';
import {theme} from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import config from './assets/config';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <title>{config?.pageTitle}</title>
      <GlobalStyle />
      <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
		  />
      <Router />
    </ThemeProvider>
  );
}

export default App;