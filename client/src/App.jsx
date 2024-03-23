import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewPage from "./pages/NewPage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="text-white bg-black">
			<Router>
				<Routes>
					<Route
						index
						element={<Navbar></Navbar>}></Route>

					<Route
						path="/movie/home"
						element={<Home></Home>}></Route>
					<Route
						path="/movie/:id"
						element={<h1>moviePage</h1>}></Route>

					<Route
						path="/movie/watch-history"
						element={<h1>watch history</h1>}></Route>

					<Route
						path="/*"
						element={<h1>ErrorPage</h1>}></Route>
					<Route
						path="/try"
						element={<NewPage></NewPage>}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
