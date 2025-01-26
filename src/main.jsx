import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import GamePage from './GamePage.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/games" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
