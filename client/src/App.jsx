import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import WatchedFavorites from "./pages/WatchedFavorites";

function App() {
	return (
		<div className="text-white bg-black">
			<Router>
				<Routes>
					<Route
						path="/home"
						element={<Home></Home>}></Route>
					<Route
						path="/movie/:id"
						element={<h1>moviePage</h1>}></Route>
					<Route
						path="/search/:name"
						element={<SearchPage />}></Route>
					<Route
						path="/watch-history"
						element={<WatchedFavorites></WatchedFavorites>}></Route>
					<Route
						path="/*"
						element={<h1>ErrorPage</h1>}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
