import { CoursesRoute } from "@/app/routes/app/reviews/courses/courses";
import { AppRoot } from "@/app/routes/app/root";
import { H1 } from "@/components/typography";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
            const { ReviewsRoute } = await import(
              "./routes/app/reviews/reviews"
            );
            return { Component: ReviewsRoute };
          },
          children: [
            {
              path: "courses",
              children: [
                {
                  path: "",
                  lazy: async () => {
                    const { CoursesRoute } = await import(
                      "./routes/app/reviews/courses/courses"
                    );
                    return { Component: CoursesRoute };
                  },
                },
                {
                  path: ":courseCode",
                  lazy: async () => {
                    const { CourseRoute } = await import(
                      "./routes/app/reviews/courses/course"
                    );
                    return { Component: CourseRoute };
                  },
                },
              ],
            },
            {
              path: "lecturers",
              children: [
                {
                  path: "",
                  lazy: async () => {
                    const { LecturersRoute } = await import(
                      "./routes/app/reviews/lecturers/lecturers"
                    );
                    return { Component: LecturersRoute };
                  },
                },
                {
                  path: ":id",
                  lazy: async () => {
                    const { LecturerRoute } = await import(
                      "./routes/app/reviews/lecturers/lecturer"
                    );
                    return { Component: LecturerRoute };
                  },
                },
              ],
            },
            {
              path: "clubs",
              children: [
                {
                  path: "",
                  lazy: async () => {
                    const { ClubsRoute } = await import(
                      "./routes/app/reviews/clubs/clubs"
                    );
                    return { Component: ClubsRoute };
                  },
                },
                {
                  path: ":id",
                  lazy: async () => {
                    const { ClubRoute } = await import(
                      "./routes/app/reviews/clubs/club"
                    );
                    return { Component: ClubRoute };
                  },
                },
              ],
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
