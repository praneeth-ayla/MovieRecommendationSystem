import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Logout() {
	function logoutUser() {
		// localStorage.token = "";
		localStorage.removeItem("token"); // Remove the token from localStorage
		toast.success("Redirecting to Login page", {
			theme: "dark",
			autoClose: 1200,
		});
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	}
	return (
		<div>
			<button
				className="p-1 font-bold text-white bg-blue-600 rounded-lg"
				onClick={() => logoutUser()}>
				Log out
			</button>
			<ToastContainer />
		</div>
	);
}
