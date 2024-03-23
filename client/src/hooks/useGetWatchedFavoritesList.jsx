import { useState, useEffect } from "react";
import axios from "axios";

function useGetWatchedFavoritesList() {
	const [watchedFavoritesList, setWatchedFavoritesList] = useState([]);
	const [watchedFavoritesLoading, setWatchedFavoritesLoading] =
		useState(true);

	useEffect(() => {
		async function fetchData() {
			await axios
				.get("http://localhost:3000/movie/watched-list", {
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZlYzk2ZTlkMTY5NzFiMDNkMTVhZjMiLCJpYXQiOjE3MTExOTY5NjF9.f70fMpA3saA1_eS9XxAwYFR2CDw5gw2_yxnRBlHXH50",
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
