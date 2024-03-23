import { useState, useEffect } from "react";
import axios from "axios";

function useGetSearchedList(movieName) {
	const [searchedList, setSearchedList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			await axios
				.get(
					"https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=" +
						movieName +
						"&language=en-US"
				)
				.then((res) => {
					setSearchedList(res.data.results);
				})
				.catch((error) => {
					console.error("Error fetching SearchedFor list:", error);
				});
		}
		fetchData();
	}, []);

	return { searchedList };
}

export default useGetSearchedList;
