import { PlusIcon } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../../../components/ui/dialog";

export default function index() {
	return (
		<div className="flex flex-col gap-4 justify-center items-start md:w-3/5 mx-auto">
			<div className="sr-only">
				<h1>PostSync | Account</h1>
			</div>
			<h5>Add Accounts</h5>
			<p>Connect your accounts to get started</p>
			<Dialog>
				<DialogTrigger>
					<div className="bg-gray-200 p-8 rounded-sm cursor-pointer">
						<PlusIcon />
					</div>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							<h6>Choose Account</h6>
						</DialogTitle>
						<DialogDescription>
							<div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 place-conte gap-4">
								<div className="bg-gray-200 p-8 w-32 aspect-square rounded-sm cursor-pointer"></div>
								<div className="bg-gray-200 p-8 w-32 aspect-square rounded-sm cursor-pointer"></div>
								<div className="bg-gray-200 p-8 w-32 aspect-square rounded-sm cursor-pointer"></div>
								<div className="bg-gray-200 p-8 w-32 aspect-square rounded-sm cursor-pointer"></div>
								<div className="bg-gray-200 p-8 w-32 aspect-square rounded-sm cursor-pointer"></div>
								<div className="bg-gray-200 p-8 w-32 aspect-square rounded-sm cursor-pointer"></div>
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>

			<div className="w-full">
				<h6>Linked Account(s)</h6>
				<div className="flex items-center gap-2 border rounded-md p-2 mt-2">
					<div className="w-4 aspect-square bg-gray-400"></div>
					<div>
						<small>@kaysam_s</small>
					</div>
				</div>
			</div>
		</div>
	);
}
