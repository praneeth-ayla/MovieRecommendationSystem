import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";

export default function Card({ movie, deleteB, addB }) {
	const [isLoading, setIsLoading] = useState(true);

	async function addToWatchList(id) {
		const res = await axios
			.put(
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
			)
			.then((e) => {
				console.log(e);
			});
	}

	async function deleteFromWatchList(id) {
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
		} catch (error) {
			console.error("Error deleting from watch list:", error);
		}
	}

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	return (
		<div
			style={{ position: "relative" }}
			className="hover:scale-110">
			{isLoading ? (
				<SkeletonCard />
			) : (
				<div className="relative inline-block m-1 overflow-hidden transition-transform duration-200 border border-gray-500 rounded cursor-pointer hover:transform hover:scale-120 hover:z-1000 min-w-52 h-72">
					<img
						className="h-full w-52"
						src={`https://image.tmdb.org/t/p/original${
							movie ? movie.poster_path : ""
						}`}
					/>
					<div className="absolute bottom-0 flex flex-col justify-end p-0 transition-opacity duration-200 opacity-0 hover:opacity-100 h-290 w-85 bg-gradient-to-t from-transparent to-black md:p-4 cards__overlay ">
						<div className="flex justify-between mb-1 text-xl font-bold">
							<span>{movie ? movie.original_title : ""} </span>
							<span>
								{addB ? (
									<svg
										onClick={() => {
											addToWatchList(movie.id);
										}}
										className="h-7 hover:h-9"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor">
										<title>
											Add To Previously Watched List
										</title>
										<path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
									</svg>
								) : (
									""
								)}
							</span>
						</div>
						<div className="mb-1 text-sm ">
							<span className="text-xs font-extrabold">
								Release
								Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</span>
							<span className="text-xs font-extrabold ">
								Rating:
							</span>
							<br />
							<div className="flex justify-between">
								{movie ? movie.release_date : ""}
								<span className="mr-10 ">
									{movie ? movie.vote_average : ""}
									<i className="fas fa-star" />
								</span>
							</div>
						</div>
						<div className="mb-1 text-sm italic card__description">
							{movie ? movie.overview.slice(0, 118) + "..." : ""}
						</div>
					</div>
					{deleteB ? (
						<svg
							className="absolute top-0 right-0 w-6 h-6 mt-2 mr-2 text-white cursor-pointer"
							onClick={() => {
								deleteFromWatchList(movie.id);
							}}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<line
								x1="18"
								y1="6"
								x2="6"
								y2="18"
							/>
							<line
								x1="6"
								y1="6"
								x2="18"
								y2="18"
							/>
						</svg>
					) : (
						""
					)}
				</div>
			)}
		</div>
	);
}
