import GlobalStyles from 'styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'routes';
import { defaultTheme } from 'styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
