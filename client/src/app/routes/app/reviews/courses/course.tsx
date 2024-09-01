import { useParams } from "react-router-dom";

export const CourseRoute = () => {
  const params = useParams();
  return <div>Course review for {params.id}</div>;
};
