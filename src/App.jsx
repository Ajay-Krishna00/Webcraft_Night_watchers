import GameCarousal from './components/gameCarousal';
import Navbar from './components/navbar.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme.jsx";
import Login from './components/Login.jsx';
import { useState } from 'react';

function App() {
const [showLogin, setShowLogin] = useState(true);

  
  return (
    <>
      <div>{showLogin && <Login setShowLogin={setShowLogin} />}</div>
      <ChakraProvider theme={theme}>
        <Navbar />
        <GameCarousal />
        
      </ChakraProvider>
    </>
  )
}

export default App
