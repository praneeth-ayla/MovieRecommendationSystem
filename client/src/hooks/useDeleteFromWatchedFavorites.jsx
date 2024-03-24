import axios from "axios";

async function useDeleteFromWatchedFavorites(id) {
	try {
		const res = await axios.delete("http://localhost:3000/movie", {
			data: {
				deleteList: [id],
			},
			headers: {
				Authorization: "Bearer " + localStorage.token,
			},
		});

		if (res.status === 200) {
			window.location.reload();

			alert("file deleted");
		}
	} catch (error) {
		console.error("Error deleting from watch list:", error);
	}
}

export default useDeleteFromWatchedFavorites;
