import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import Routes from './src/routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './src/contexts/AuthContext';
import TaskProvider from './src/contexts/TaskContext';

// import { Container } from './styles';
const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <TaskProvider>
            <Routes />
          </TaskProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>

  )
}

export default App;