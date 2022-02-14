import GlobalStyles from 'styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'routes';
import { defaultTheme } from 'styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
