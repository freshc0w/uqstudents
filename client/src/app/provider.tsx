import { MainErrorFallback } from "@/components/errors/main";
import { Spinner } from "@/components/ui/spinner";
import { queryConfig } from "@/lib/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

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
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
