import { useState } from "react";
import { Smile, Image as ImageIcon, Calendar } from "lucide-react";
import { Button } from "../../../../../components/ui/Button";
import { Textarea } from "../../../../../components/ui/textarea";

export default function CreatePost() {
	const [post, setPost] = useState("");

	return (
		<div className="w-full mx-auto">
			<div className="rounded-lg p-4 bg-gray-100 relative">
				<Textarea
					className="w-full bg-transparent resize-none min-h-[200px]"
					placeholder="What do you want to talk about?"
					value={post}
					onChange={(e) => setPost(e.target.value)}
				/>
				<div className="flex justify-between mt-2">
					<Smile className="w-5 h-5 text-gray-500 cursor-pointer" />
					<div className="flex gap-2">
						<ImageIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
						<Calendar className="w-5 h-5 text-gray-500 cursor-pointer" />
					</div>
				</div>
			</div>
			<div className="mt-4">
				<label className="text-sm font-medium">Select Account(s)</label>
				<div className="mt-2 p-2 bg-gray-200 rounded-lg text-gray-700 text-sm">
					Twitter
				</div>
			</div>
			<div className="flex justify-end mt-4 gap-2">
				<Button variant="outline">Preview</Button>
				<Button disabled={!post}>Create</Button>
			</div>
		</div>
	);
}
