import { useState, useEffect } from "react";
import axios from "axios";

function useGetRecommendedList() {
	const [recommendedList, setRecommendedList] = useState([]);
	const [recommendedLoading, setRecommendedLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			await axios
				.get("http://localhost:3000/movie/", {
					headers: {
						Authorization: "Bearer " + localStorage.token,
					},
				})
				.then((res) => {
					setRecommendedList(res.data.recommendations);
					setRecommendedLoading(false); // Set recommendedLoading to false when data fetching is complete
				})
				.catch((error) => {
					console.error("Error fetching recommended list:", error);
					setRecommendedLoading(false); // Set recommendedLoading to false on error
				});
		}
		fetchData();
	}, []);

	return { recommendedList, recommendedLoading };
}

export default useGetRecommendedList;
