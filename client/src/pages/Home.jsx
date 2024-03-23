import React, { useEffect, useState } from "react";
import axios from "axios";
import useGetFullDetails from "../hooks/useGetFullDetails";

export default function Home() {
	const [previouslyWatched, setPreviouslyWatched] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:3000/movie/watched-list", {
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZkNmZlNGY1NzVkMDRmMWY1Yjk5M2YiLCJpYXQiOjE3MTExMDgxMDF9.-3FrNtxD69V-GSK2vEk0vZv6nDoLS7IsBZFtNc1H43o",
				},
			})
			.then((res) => {
				setPreviouslyWatched(res.data.watchedList);
				setLoading(false); // Set loading to false when data fetching is complete
			})
			.catch((error) => {
				console.error(
					"Error fetching previously watched movies:",
					error
				);
				setLoading(false); // Set loading to false on error
			});
	}, []);
	console.log(previouslyWatched);

	const { getFullDetails, fullLoading } =
		useGetFullDetails(previouslyWatched);

	if (fullLoading) {
		console.log("loading");
	} else {
		console.log(getFullDetails, "fullDeatils");
	}

	return (
		<div>
			hiiii
			{loading ? (
				<h1>loading...</h1>
			) : (
				<div>
					{previouslyWatched.map((movie, id) => (
						<div
							key={id}
							onClick={() => printFun(movie)}>
							{movie}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

const printFun = (movieDetails) => {
	console.log(movieDetails);
};

function ShowDetails({ movieDetails, movieTitle, getFullDetails }) {
	return (
		<div>
			<h1 onClick={() => printFun(movieDetails, getFullDetails)}>
				{movieTitle}
			</h1>
		</div>
	);
}
