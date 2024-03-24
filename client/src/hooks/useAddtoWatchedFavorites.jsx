import axios from "axios";

async function useAddtoWatchedFavorites(id) {
	try {
		const res = await axios.put(
			"http://localhost:3000/movie",
			{
				watchedList: [id],
			},
			{
				headers: {
					Authorization: "Bearer " + localStorage.token,
				},
			}
		);

		if (res.status === 200) {
			alert("Added to watched favorites");
			// return res.data; // Returning the response data
		} else if (res.status === 204) {
			alert("Already added to you watched favorites");
		}
	} catch (error) {
		console.error("Error adding to watched favorites:", error);
		alert("Failed to add to watched favorites");
		throw error; // Rethrow the error for the caller to handle
	}
}

export default useAddtoWatchedFavorites;
