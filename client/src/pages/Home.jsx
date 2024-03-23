import useGetFullDetails from "../hooks/useGetFullDetails";
import Card from "../components/Card";
import NavBar from "../components/Navbar";
import useGetRecommendedList from "../hooks/useGetRecommendations";
import useGetWatchedFavoritesList from "../hooks/useGetWatchedFavoritesList";

export default function Home() {
	const { watchedFavoritesList } = useGetWatchedFavoritesList();

	const { recommendedList } = useGetRecommendedList();
	const { getFullDetails } = useGetFullDetails(recommendedList);

	return (
		<div>
			<NavBar currentPage={"home"}></NavBar>
			<div className="pt-10 pb-5 font-semibold">
				Based on your Past Watched Favorites:
			</div>
			<div className="grid grid-cols-1 gap-3 mb-6 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
				{getFullDetails.map((movie, id) => (
					<Card
						movie={movie}
						key={id}
						deleteB={false}
						addB={true}></Card>
				))}
			</div>
		</div>
	);
}
