import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import Routes from './src/routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './src/contexts/AuthContext';

// import { Container } from './styles';
const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>

  )
}

export default App;