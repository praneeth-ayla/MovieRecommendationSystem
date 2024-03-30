import { useState, useEffect } from "react";
import axios from "axios";

function useGetWatchedFavoritesList() {
	const [watchedFavoritesList, setWatchedFavoritesList] = useState([]);
	const [watchedFavoritesLoading, setWatchedFavoritesLoading] =
		useState(true);

	useEffect(() => {
		async function fetchData() {
			await axios
				.get("http://15.206.74.140:3000/movie/watched-list", {
					headers: {
						Authorization: "Bearer " + localStorage.token,
					},
				})
				.then((res) => {
					setWatchedFavoritesList(res.data.watchedList);
					setWatchedFavoritesLoading(false); // Set WatchedFavoritesLoading to false when data fetching is complete
				})
				.catch((error) => {
					console.error(
						"Error fetching WatchedFavorites list:",
						error
					);
					setWatchedFavoritesLoading(false); // Set WatchedFavoritesLoading to false on error
				});
		}
		fetchData();
	}, []);

	return { watchedFavoritesList, watchedFavoritesLoading };
}

export default useGetWatchedFavoritesList;
