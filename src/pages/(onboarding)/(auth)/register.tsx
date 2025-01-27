import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../../icon/GoogleIcon";
import AppleIcon from "../../../icon/AppleIcon";

export default function Register() {
  const navigate = useNavigate();

  const buttons: {
    variant:
      | "secondary"
      | "outline"
      | "default"
      | "link"
      | "destructive"
      | "ghost";
    label: string;
    path: string;
    icon: React.ReactNode;
  }[] = [
    {
      variant: "secondary",
      label: "Email",
      path: "/register/email",
      icon: <GoogleIcon />,
    },
    {
      variant: "outline",
      label: "Google",
      path: "/register/google",
      icon: <GoogleIcon />,
    },
    {
      variant: "outline",
      label: "Apple ID",
      path: "/register/apple",
      icon: <AppleIcon />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-1/2 mx-auto">
      <h5>How would you like to signup?</h5>
      <div className="flex flex-col gap-4 w-full">
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            onClick={() => navigate(button.path)}
            className="flex items-center justify-center gap-2 w-full h-12"
          >
            {button.icon}
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
