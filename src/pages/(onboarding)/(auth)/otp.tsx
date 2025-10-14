import { Button } from "../../../../components/ui/Button";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "../../../../components/ui/input-otp";
import { useNavigate } from "react-router-dom";
import Alert from "../../../components/ui/Alert";
import { useState } from "react";

const OTPVerification = () => {
	const navigate = useNavigate();
	const [isVerified, setIsVerified] = useState(false);
	return (
		<div className="flex flex-col gap-4 justify-center items-center md:w-3/5 mx-auto">
			{isVerified ? (
				<Alert
					title="Account Verified Successfully"
					message="Click the button below to proceed to to your Homepage"
					buttonText="Go home"
					onClick={() => navigate("/dashboard")}
				/>
			) : (
				<div>
					<div>
						<div className="w-12 h-12 mx-auto rounded-full bg-gray-500 mb-4"></div>
						<h5 className="text-center">OTP (One Time Password)</h5>
					</div>
					<div>
						<p className="text-gray-400 mb-6 text-center">
							An OTP has been sent to ******km@gmail.com. Please type the
							4-digit code below.
						</p>
						<div className="flex flex-col items-center justify-center gap-4">
							<InputOTP maxLength={4}>
								<InputOTPGroup className="flex justify-center gap-4 mb-4">
									<InputOTPSlot index={0}></InputOTPSlot>

									<InputOTPSlot index={1}></InputOTPSlot>

									<InputOTPSlot index={2}></InputOTPSlot>

									<InputOTPSlot index={3}></InputOTPSlot>
								</InputOTPGroup>
							</InputOTP>

							<Button
								type="submit"
								className="w-full"
								onClick={() => setIsVerified(true)}
							>
								Verify OTP
							</Button>
							<Button
								variant="ghost"
								className="w-full"
								onClick={() => navigate(-1)}
							>
								Go Back
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default OTPVerification;
