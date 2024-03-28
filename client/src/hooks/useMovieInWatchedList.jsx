import { useEffect, useState } from "react";
import useGetFullDetails from "./useGetFullDetails";
import useGetWatchedFavoritesList from "./useGetWatchedFavoritesList";

function useMovieInWatchedList(id) {
	const { watchedFavoritesList } = useGetWatchedFavoritesList();
	const [isTrue, setIsTrue] = useState(false);

	useEffect(() => {
		const movieId = parseInt(id);

		setIsTrue(watchedFavoritesList.includes(movieId));

		if (watchedFavoritesList.includes(movieId)) {
		}
	}, [id, watchedFavoritesList]);

	return isTrue;
}

export default useMovieInWatchedList;
