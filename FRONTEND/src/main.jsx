import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'
import { HeaderContextProvider } from './Context/HeaderContext.jsx'
import { StoreContextProvider } from './Context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <HeaderContextProvider>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </HeaderContextProvider>
  // </React.StrictMode>,
)
