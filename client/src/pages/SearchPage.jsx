import React from "react";
import Card from "../components/Card";
import useGetSearchedList from "../hooks/useSearchedList";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAddtoWatchedFavorites from "../hooks/useAddtoWatchedFavorites";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SearchPage() {
	const param = useParams().name;
	const { searchedList } = useGetSearchedList(param);

	return (
		<div>
			<Navbar currentPage={""}></Navbar>
			<div className="px-3">
				<div className="mt-11">
					<span className="pt-10 pb-5 ">Searched for:</span>
					<span className="font-bold"> {param}</span>
				</div>
				{searchedList.length === 0 ? (
					<h1 className="font-bold text-center p-28">
						No Results Found
					</h1>
				) : (
					<div className="grid grid-cols-1 gap-3 mb-6 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
						{searchedList.map((movie, id) => (
							<Card
								movie={movie}
								key={id}
								deleteB={false}
								addB={true}
								toast={toast}
								cardTimer={300}
								addFun={useAddtoWatchedFavorites}
							/>
						))}
					</div>
				)}
			</div>
			<ToastContainer></ToastContainer>
		</div>
	);
}
