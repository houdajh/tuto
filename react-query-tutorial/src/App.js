import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Repositories from "./components/Repositories";// Make sure this path is correct

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryKeyGenerator: (queryKey) => JSON.stringify(queryKey),
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <Repositories />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
