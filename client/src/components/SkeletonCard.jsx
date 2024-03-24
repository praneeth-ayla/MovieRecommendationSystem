import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonCard() {
	return (
		<SkeletonTheme
			baseColor="#313131"
			highlightColor="#525252">
			<Skeleton height={"40px"}></Skeleton>
			<Skeleton height={"20px"}></Skeleton>
			<Skeleton height={"80px"}></Skeleton>
			<Skeleton height={"150px"}></Skeleton>
		</SkeletonTheme>
	);
}
