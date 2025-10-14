import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/Button";

export default function Onboarding() {
	const navigate = useNavigate();

	return (
		<>
			<div>
				<h4>
					Looking to share your content across platforms or simplify your social
					media strategy?
				</h4>
				<Button className="mt-4" onClick={() => navigate("/register")}>
					Get Started
				</Button>
			</div>
		</>
	);
}
