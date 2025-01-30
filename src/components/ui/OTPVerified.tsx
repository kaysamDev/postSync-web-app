import { Button } from "../../../components/ui/Button";

export default function OTPVerified() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center md:w-3/5 mx-auto">
      <div className="w-full h-[326px] bg-gray-300"></div>
      <div className="flex flex-col gap-4 items-center text-center">
        <h5>Account Verified Successfully</h5>
        <p>Click the button below to proceed to to your Homepage </p>
        <Button className="w-full">Go home</Button>
      </div>
    </div>
  );
}
