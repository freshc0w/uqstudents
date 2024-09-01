import { useParams } from "react-router-dom";

export const ClubRoute = () => {
  const { id } = useParams();
  return <div>Club reviews for {id}</div>;
};
