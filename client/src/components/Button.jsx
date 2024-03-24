import React from "react";

function Button({ label }) {
	return (
		<>
			<button
				type="submit"
				className="py-2 mt-6 mb-1 font-semibold text-white bg-blue-500 hover:scale-105 rounded-xl">
				{label}
			</button>
		</>
	);
}

export default Button;
