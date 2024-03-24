import useGetFullDetails from "../hooks/useGetFullDetails";
import Card from "../components/Card";
import NavBar from "../components/Navbar";
import useGetRecommendedList from "../hooks/useGetRecommendations";
import { useState } from "react";
import useAddtoWatchedFavorites from "../hooks/useAddtoWatchedFavorites";

export default function Home() {
	const { recommendedList, recommendedLoading } = useGetRecommendedList();
	const { getFullDetails } = useGetFullDetails(recommendedList);
	const { reload, setReload } = useState(false);

	// console.log(recommendedLoading);
	return (
		<div>
			<NavBar currentPage={"home"}></NavBar>
			<div className="px-3">
				<div className="pt-10 pb-5 font-semibold">
					Based on your Past Watched Favorites:
				</div>
				{recommendedLoading ? (
					<h1 className="font-bold text-center p-28">
						Generating your Recommendation...
					</h1>
				) : getFullDetails.length === 0 ? (
					<div>
						<h2>Get Started</h2>
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
								deleteB={false}
								addB={true}
								// deleteFun={alertFun}
								addFun={useAddtoWatchedFavorites}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
