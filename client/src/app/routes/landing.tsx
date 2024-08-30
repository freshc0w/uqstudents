import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const LandingRoute = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Landing</h1>
      <h2>This is the Landing Page</h2>
      <h3>
        Go to <Button onClick={() => navigate("/app")}>/app</Button>
      </h3>
    </div>
  );
};
