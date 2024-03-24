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
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZlYzk2ZTlkMTY5NzFiMDNkMTVhZjMiLCJpYXQiOjE3MTExOTY5NjF9.f70fMpA3saA1_eS9XxAwYFR2CDw5gw2_yxnRBlHXH50",
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
