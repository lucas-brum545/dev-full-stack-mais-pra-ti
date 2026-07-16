import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/App.jsx'
import '../styles/global.css'
import '../styles/variables.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)