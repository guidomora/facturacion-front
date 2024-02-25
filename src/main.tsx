import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { mainTheme } from './theme/mainTheme.ts'
import { BrowserRouter } from 'react-router-dom'
import { UiProvider } from './context/UibillingContext/UiProvider.tsx'
import { DataProvider } from './context/DataBillingContext/DataProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UiProvider>
      <BrowserRouter>
        <DataProvider>
          <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </DataProvider>
      </BrowserRouter>
    </UiProvider>
  </React.StrictMode>,
)
