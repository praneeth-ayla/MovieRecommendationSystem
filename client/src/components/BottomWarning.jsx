import { Link } from "react-router-dom";

export default function BottomWarning({ label, buttonText, to }) {
	return (
		<div className="flex justify-center py-2 pt-2 text-sm text-slate-300 ">
			<div className="">{label}</div>
			<Link
				className="pl-1 underline cursor-pointer pointer"
				to={to}>
				{buttonText}
			</Link>
		</div>
	);
}
