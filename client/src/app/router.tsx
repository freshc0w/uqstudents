import { AppRoot } from "@/app/routes/app/root";
import { H1 } from "@/components/typography";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      element: <AppRoot />,
      children: [
        {
          path: "landing",
          lazy: async () => {
            const { LandingRoute } = await import("./routes/landing");
            return { Component: LandingRoute };
          },
        },
        {
          path: "reviews",
          lazy: async () => {
            const { ReviewsRoute } = await import("./routes/app/reviews/reviews");
            return { Component: ReviewsRoute };
          },
          children: [
            {
              path: "courses",
              Component: () => <div>Course reviews</div>,
            },
            {
              path: "lecturers",
              Component: () => <div>Lecturer reviews</div>,
            },
            {
              path: "clubs",
              Component: () => <div>Clubs reviews</div>,
            },
          ],
        },
        {
          path: "tutors",
          children: [
            { path: "eait", Component: () => <div>EAIT tutors</div> },
            { path: "bel", Component: () => <div>BEL tutors</div> },
          ],
        },
        {
          path: "",
          Component: () => (
            <div>
              <H1>App Home</H1>
            </div>
          ),
        },
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./routes/not-found");
        return { Component: NotFoundRoute };
      },
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
