import { useParams } from "react-router-dom";

export const LecturerRoute = () => {
  const { id } = useParams();
  return <div>Lecturer Review for {id}</div>;
};
