import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Home/>
  </StrictMode>,
)
