import React from "react";
import { useParams } from "react-router-dom";
import useMovieInWatchedList from "../hooks/useMovieInWatchedList";

export default function MovieDetails() {
	const { id } = useParams();
	const isTrue = useMovieInWatchedList(id);

	return (
		<div>
			{isTrue ? (
				<div>
					<p>
						Movie ID {isTrue} exists in the watched favorites list.
					</p>
				</div>
			) : (
				<p>
					Movie ID {isTrue} does not exist in the watched favorites
					list.
				</p>
			)}
		</div>
	);
}
