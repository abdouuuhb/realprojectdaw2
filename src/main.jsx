import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// أضفنا الـ Provider عشان الربط بين Registration و MyRegistrations
import { RegistrationProvider } from './context/RegistrationContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RegistrationProvider>
        <App />
      </RegistrationProvider>
    </BrowserRouter>
  </StrictMode>
)