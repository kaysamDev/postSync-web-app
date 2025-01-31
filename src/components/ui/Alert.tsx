import { Button } from "../../../components/ui/Button";

type OTPVerifiedProps = {
  title: string;
  message: string;
  buttonText?: string;
};

export default function OTPVerified({
  title,
  message,
  buttonText,
}: OTPVerifiedProps) {
  return (
    <>
      <div className="w-full h-[326px] bg-gray-300"></div>
      <div className="flex flex-col gap-4 items-center text-center">
        <h5>{title}</h5>
        <p>{message}</p>
        {buttonText && <Button className="w-full">{buttonText}</Button>}
      </div>
    </>
  );
}
