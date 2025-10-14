import { Button } from "../../../components/ui/Button";

type AlertProps = {
	title: string;
	message: string;
	buttonText?: string;
	onClick?: () => void;
};

export default function Alert({
	title,
	message,
	buttonText,
	onClick,
}: AlertProps) {
	return (
		<>
			<div className="w-full h-[326px] bg-gray-300"></div>
			<div className="flex flex-col gap-4 items-center text-center">
				<h5>{title}</h5>
				<p>{message}</p>
				{buttonText && (
					<Button className="w-full" onClick={onClick}>
						{buttonText}
					</Button>
				)}
			</div>
		</>
	);
}
