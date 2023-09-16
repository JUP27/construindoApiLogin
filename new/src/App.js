import { ChakraProvider} from '@chakra-ui/react'
import Rota from "./rotas/rota";

function App() {
  return (
      <ChakraProvider>
        <Rota/>
      </ChakraProvider>
  );
}

export default App;
