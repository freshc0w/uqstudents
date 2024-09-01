import { ContentLayout } from "@/components/layouts";
import { Outlet } from "react-router-dom";

const Input = () => {
  return (
    <div className="w-[100%] flex justify-center">
      <input type="text" />
    </div>
  );
};

export const ReviewsRoute = () => {
  return (
    <ContentLayout headerChildren={<Input />}>
      <Outlet />
    </ContentLayout>
  );
};
