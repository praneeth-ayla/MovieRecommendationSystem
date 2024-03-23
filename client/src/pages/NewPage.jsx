import React from "react";
import useGetFullDetails from "../hooks/useGetFullDetails";

export default function NewPage() {
	const newData = useGetFullDetails([558, 559]);
	console.log(newData.getFullDetails);
	return <div>newPage</div>;
}
