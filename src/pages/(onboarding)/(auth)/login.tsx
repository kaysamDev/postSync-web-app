import { Button } from "../../../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../../icon/GoogleIcon";
import AppleIcon from "../../../icon/AppleIcon";
import MailIcon from "../../../icon/MailIcon";
import { useState } from "react";
import LoginWithEmail from "../../../components/ui/LoginWithEmail";

export default function Login() {
  const navigate = useNavigate();
  const [emailForm, setEmailForm] = useState(false);

  const handleEmailForm = () => {
    setEmailForm(true);
  };

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
    onClick?: () => void;
  }[] = [
    {
      variant: "secondary",
      label: "Email",
      path: "/register/email",
      icon: <MailIcon />,
      onClick: handleEmailForm,
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
    <div className="flex flex-col gap-4 justify-center items-center md:w-3/5 mx-auto">
      {emailForm ? (
        <div className="w-full">
          <LoginWithEmail />
        </div>
      ) : (
        <>
          <h4>Welcome back! Login to get started</h4>
          <div className="flex flex-col gap-4 w-full mt-8">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                onClick={
                  button.onClick ? button.onClick : () => navigate(button.path)
                }
                className="flex items-center justify-center gap-2 w-full h-12"
              >
                {button.icon}
                {button.label}
              </Button>
            ))}
            <div>
              <p>
                Don&apos;t have an account?{" "}
                <span>
                  <Link to="/register" className="text-primary-500">
                    Sign up
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
