import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center md:w-3/5 mx-auto h-dvh">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button onClick={handleGoBack}>Go Back</Button>
    </div>
  );
}
