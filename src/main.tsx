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
import { UiProviderUpdate } from './context/UibillingContext/UpdateProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UiProvider>
      <UiProviderUpdate>
        <BrowserRouter>
          <DataProvider>
            <ThemeProvider theme={mainTheme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </DataProvider>
        </BrowserRouter>
      </UiProviderUpdate>

    </UiProvider>
  </React.StrictMode>,
)
