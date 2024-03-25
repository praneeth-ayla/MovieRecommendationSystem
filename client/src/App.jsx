import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import WatchedFavorites from "./pages/WatchedFavorites";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
	const isLoggedIn =
		localStorage.token !== undefined && localStorage.token !== "";

	return (
		<div className="text-white bg-black">
			<Router>
				<Routes>
					{isLoggedIn ? (
						<>
							<Route
								path="/"
								element={<Home></Home>}></Route>
							<Route
								path="/movie/:id"
								element={<h1>moviePage</h1>}></Route>
							<Route
								path="/search/:name"
								element={<SearchPage />}></Route>
							<Route
								path="/watch-history"
								element={
									<WatchedFavorites></WatchedFavorites>
								}></Route>
							<Route
								path="/*"
								element={<h1>ErrorPage</h1>}></Route>
							<Route
								path="*"
								element={<Navigate to="/" />}
							/>
						</>
					) : (
						<>
							<Route
								path="/signup"
								element={<Signup></Signup>}></Route>
							<Route
								path="/signin"
								element={<Login></Login>}></Route>
							<Route
								path="*"
								element={<Navigate to="/signin" />}
							/>
						</>
					)}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
