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
						const result = await axios.get(
							`https://api.themoviedb.org/3/movie/${item}?api_key=1cf50e6248dc270629e802686245c2c8`
						);
						return result.data;
					})
				);
				setGetFullDetails(fullList);
				setFullLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setFullLoading(false);
			}
		};

		fetchData();
	}, [list]);

	// console.log(getFullDetails);
	return { getFullDetails, fullLoading };
}

export default useGetFullDetails;
