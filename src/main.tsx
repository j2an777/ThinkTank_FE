import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles.ts';
import { ModalContextProvider } from './contexts/ModalContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
