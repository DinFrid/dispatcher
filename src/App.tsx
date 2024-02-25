import 'rsuite/dist/rsuite.min.css'; 
import PageLayout from './layout/PageLayout/PageLayout';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider, createTheme } from '@mui/material';

function App() {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, 
        sm: 450, 
        md: 1200, 
        lg: 1500, 
        xl: 1900,
      },
    },
  });
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <PageLayout/>
    </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
