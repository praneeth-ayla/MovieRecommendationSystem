import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";

function useGetUserName() {
	const [userName, setUserName] = useState("User");
	const [loadingUserName, setLoadingUserName] = useState(true);

	useEffect(() => {
		const fetchUserName = async () => {
			const token = localStorage.token;
			try {
				const decodedToken = decodeToken(token); // Corrected usage
				setUserName(decodedToken.name);
				setLoadingUserName(false);
			} catch (e) {
				console.error("Error: ", e);
				// Handle the error if needed
			}
		};

		fetchUserName();
	}, []); // Empty dependency array means this effect runs only once after mount

	return { userName, loadingUserName };
}

export default useGetUserName;
