import { Button } from "../../../../../components/ui/Button";

export default function ForgotPassword() {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center text-center">
        <h5>Account Verified Successfully</h5>
        <p>Click the button below to proceed to to your Homepage </p>
        <Button className="w-full">Go home</Button>
      </div>
    </div>
  );
}
