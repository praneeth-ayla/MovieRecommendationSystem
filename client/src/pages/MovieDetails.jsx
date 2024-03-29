import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovieInWatchedList from "../hooks/useMovieInWatchedList";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import useDeleteFromWatchedFavorites from "../hooks/useDeleteFromWatchedFavorites.jsx";
import useAddtoWatchedFavorites from "../hooks/useAddtoWatchedFavorites.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MovieDetails() {
	function handleDelete(res) {
		if (res.status === 200) {
			toast.success("Movie Deleted from Watched Favorites", {
				theme: "dark",
				autoClose: 1500,
			});
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		}
		console.log(res);
	}

	function handleAdd(res) {
		if (res.status === 200) {
			toast.success("Movie Added to Watched Favorites ", {
				theme: "dark",
				autoClose: 1500,
			});
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		}
		if (res.status === 204) {
			toast.warning("Movie is Already your in your Watched Favorites ", {
				theme: "dark",
				autoClose: 1500,
			});
		}
		console.log(res);
	}

	const { id } = useParams();
	const isTrue = useMovieInWatchedList(id);
	const [currentMovieDetail, setCurrentMovieDetails] = useState("");

	async function getCurrentMovieDetail(id) {
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=1cf50e6248dc270629e802686245c2c8`
			);
			setCurrentMovieDetails(res.data);
		} catch (error) {
			console.error("Failed to fetch movie details:", error);
		}
	}

	useEffect(() => {
		getCurrentMovieDetail(id);
	}, []);

	return (
		<div className="flex flex-col">
			<Navbar />
			<div className="grid grid-cols-3 p-3 m-3 bg-slate-950">
				<div className="p-2 ">
					<div className="text-4xl font-extrabold">
						<div>{currentMovieDetail.original_title}</div>
					</div>
					<div className="pt-2 text-sm text-slate-400">
						<div>
							Vote Average: {currentMovieDetail.vote_average}
						</div>
						<div>
							Release Date: {currentMovieDetail.release_date}
						</div>
						<div>Runtime: {currentMovieDetail.runtime}</div>
					</div>
					<br />
					<div className="text-xs">
						<div>{currentMovieDetail.overview}</div>
					</div>
					<br />
					<div className="flex flex-wrap gap-1">
						<div className="text-sm text-slate-400">Genres: </div>
						{currentMovieDetail &&
							currentMovieDetail.genres &&
							currentMovieDetail.genres.map((genre, id) => (
								<div
									key={id}
									className="rounded bg-slate-600 p-0.5">
									{genre.name}
								</div>
							))}
					</div>
					<br />
					<div>
						{isTrue ? (
							<button
								className="p-2 px-5 text-lg font-bold text-center text-black bg-red-300 rounded-md"
								onClick={async () => {
									const res =
										await useDeleteFromWatchedFavorites(
											currentMovieDetail.id
										);
									handleDelete(res);
								}}>
								Delete From Watched Favorites list
							</button>
						) : (
							<button
								className="px-5 pt-2 pb-2 font-bold text-center text-black bg-green-300 rounded-md"
								onClick={async () => {
									const res = await useAddtoWatchedFavorites(
										currentMovieDetail.id
									);
									handleAdd(res);
								}}>
								Add to Watched Favorites list
							</button>
						)}
					</div>
				</div>
				<div className="relative z-0 items-center col-span-2">
					{currentMovieDetail.backdrop_path ? (
						<>
							<img
								className="rounded-lg opacity-25"
								src={`https://image.tmdb.org/t/p/original/${currentMovieDetail.backdrop_path}`}
								alt=""
							/>
							<img
								src={`https://image.tmdb.org/t/p/original/${currentMovieDetail.poster_path}`}
								className="absolute bottom-0 z-50 w-auto rounded shadow-2xl h-60 left-4"
								style={{
									top: "75%",
									transform: "translateY(-50%)",
								}}
							/>
						</>
					) : (
						<h1 className="pt-56 text-2xl font-bold text-center">
							Error fetching poster
						</h1>
					)}
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}
