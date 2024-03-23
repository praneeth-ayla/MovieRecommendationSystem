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
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZlYzk2ZTlkMTY5NzFiMDNkMTVhZjMiLCJpYXQiOjE3MTExOTY5NjF9.f70fMpA3saA1_eS9XxAwYFR2CDw5gw2_yxnRBlHXH50",
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
