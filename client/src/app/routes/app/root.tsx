import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet, useLocation } from "react-router-dom";
import { NavbarLayout } from "@/components/layouts";

export const AppRoot = () => {
  const location = useLocation();
  return (
    <NavbarLayout>
      <Suspense
        fallback={
          <div className="flex size-full items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <ErrorBoundary
          key={location.pathname}
          fallback={<div>Something went wrong!</div>}
        >
          <Outlet />
        </ErrorBoundary>
      </Suspense>
    </NavbarLayout>
  );
};
