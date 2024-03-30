import axios from "axios";

async function useDeleteFromWatchedFavorites(id) {
	try {
		const res = await axios.delete("http://15.206.74.140:3000/movie", {
			data: {
				deleteList: [id],
			},
			headers: {
				Authorization: "Bearer " + localStorage.token,
			},
		});

		return res;
		// if (res.status === 200) {
		// 	setTimeout(() => {
		// 		window.location.reload();
		// 	}, 1000);
		// }
	} catch (error) {
		console.error("Error deleting from watch list:", error);
	}
}

export default useDeleteFromWatchedFavorites;
