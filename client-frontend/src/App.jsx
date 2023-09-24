import io from "socket.io-client";
import { Dummy } from "./Dummy";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
function App() {
  let socket = io("http://localhost:5000");
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Dummy title="plant disease classification" desc="classifies the plant diseases based on the input" info="sdhfljsdk ksdjflk djf ldkfj lkdkljkdfk kldjflk df kdjfl kjdlkfj 
      " />
    </QueryClientProvider>
  )
}

export default App;
