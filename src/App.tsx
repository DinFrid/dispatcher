import 'rsuite/dist/rsuite.min.css'; 
import PageLayout from './layout/PageLayout/PageLayout';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout/>
    </QueryClientProvider>
  );
}

export default App;
