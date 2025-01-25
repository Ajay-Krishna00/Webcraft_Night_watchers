import GameCarousal from './components/gameCarousal';

import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme.jsx";

function App() {
  

  return (
    <>
      
    <ChakraProvider theme={theme}>
        <GameCarousal />
        
      </ChakraProvider>
    </>
  )
}

export default App
