import React from "react";

function InputBox({ type, label, placeholder }) {
	return (
		<>
			<input
				className="p-2 text-black rounded-xl"
				type={type}
				name={label}
				id={label}
				placeholder={placeholder}
			/>
		</>
	);
}

export default InputBox;
