import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  rootElement,
);
