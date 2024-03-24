import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import useGetWatchedFavoritesList from "../hooks/useGetWatchedFavoritesList";
import useGetFullDetails from "../hooks/useGetFullDetails";
import useDeleteFromWatchedFavorites from "../hooks/useDeleteFromWatchedFavorites";

export default function WatchedFavorites() {
	const { watchedFavoritesList } = useGetWatchedFavoritesList();
	const { getFullDetails } = useGetFullDetails(watchedFavoritesList);

	return (
		<div>
			<Navbar currentPage={"watched"}> </Navbar>
			<div className="px-3">
				<div className="pt-10 pb-5 font-semibold">
					Your Watched Favorites:
				</div>
				{getFullDetails.length === 0 ? (
					<div>
						<h2>Your Watched Favorites is empty</h2>
						<h1 className="text-2xl font-bold text-center p-28">
							Search Movies and Add them to your Watched Favorites
							to Generate Recommendation based on them
						</h1>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-3 mb-6 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
						{getFullDetails.map((movie, id) => (
							<Card
								movie={movie}
								key={id}
								deleteB={true}
								addB={false}
								deleteFun={
									useDeleteFromWatchedFavorites
								}></Card>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
