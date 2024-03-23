import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

export default function Card({ movie }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {});
	});
	return <div>Card</div>;
}
