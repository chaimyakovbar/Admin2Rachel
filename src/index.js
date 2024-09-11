import React from 'react'
import ReactDOM from 'react-dom'

// import { SnackbarProvider } from 'notistack'
import { QueryClientProvider, QueryClient } from 'react-query'

import App from './App';

import './index.css';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <SnackbarProvider maxSnack={3}> */}
        <App />
      {/* </SnackbarProvider> */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
