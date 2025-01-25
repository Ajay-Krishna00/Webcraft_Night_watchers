import GameCarousal from './components/gameCarousal';
import Navbar from './components/navbar.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme.jsx";
import Login from './components/Login.jsx';

function App() {
  

  return (
    <>
      <Login />
      <ChakraProvider theme={theme}>
        <Navbar />
        <GameCarousal />
        
      </ChakraProvider>
    </>
  )
}

export default App
