import { queryConfig } from "@/lib/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
