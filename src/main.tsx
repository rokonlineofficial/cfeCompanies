import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import './index.css'
import App from './App'

const Router = import.meta.env.VITE_HASH ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </Router>
  </StrictMode>
)
