import { AppRoot } from "@/app/routes/app/root";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { LandingRoute } = await import("./routes/landing");
        return { Component: LandingRoute };
      },
    },
    {
      path: "/app",
      element: <AppRoot />,
      children: [
        {
          path: "courseReviews",
          Component: () => <div>Course reviews</div>,
        },
        {
          path: "lecturerReviews",
          Component: () => <div>Lecturer reviews</div>,
        },
        {
          path: "",
          Component: () => <div>App home</div>,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
