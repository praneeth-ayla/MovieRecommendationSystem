import { useState, useEffect } from "react";
import axios from "axios";

function useGetFullDetails(list) {
	const [getFullDetails, setGetFullDetails] = useState([]);
	const [fullLoading, setFullLoading] = useState(true);

	useEffect(() => {
		setFullLoading(true);

		const fetchData = async () => {
			try {
				const fullList = await Promise.all(
					list.map(async (item) => {
						try {
							const result = await axios.get(
								`https://api.themoviedb.org/3/movie/${item}?api_key=1cf50e6248dc270629e802686245c2c8`
							);
							return result.data;
						} catch (error) {
							console.error(
								"Error fetching data for movie ID:",
								item,
								error
							);
							return null; // Return null for failed requests
						}
					})
				);
				setGetFullDetails(fullList.filter((movie) => movie !== null)); // Filter out null values
				setFullLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setFullLoading(false);
			}
		};

		fetchData();
	}, [list]);

	return { getFullDetails, fullLoading };
}

export default useGetFullDetails;
