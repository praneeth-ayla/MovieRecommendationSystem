import axios from "axios";

async function useDeleteFromWatchedFavorites(id) {
	try {
		const res = await axios.delete("http://localhost:3000/movie", {
			data: {
				deleteList: [id],
			},
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZlYzk2ZTlkMTY5NzFiMDNkMTVhZjMiLCJpYXQiOjE3MTExOTY5NjF9.f70fMpA3saA1_eS9XxAwYFR2CDw5gw2_yxnRBlHXH50",
			},
		});

		console.log(res);
		if (res.status === 200) {
			window.location.reload();

			alert("file deleted");
			// watchedFavoritesList = useGetWatchedFavoritesList();
		}
	} catch (error) {
		console.error("Error deleting from watch list:", error);
	}
}

export default useDeleteFromWatchedFavorites;
