import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import useGetUserName from "../hooks/useGetUserName";

export default function Navbar({ currentPage }) {
	const [searchTerm, setSearchTerm] = useState("");
	const { userName, loadingUserName } = useGetUserName();

	const upperCaseUserName = userName[0].toUpperCase() + userName.slice(1);

	return (
		<div>
			<div className="grid grid-cols-3 py-5 text-center bg-gray-950">
				<Link
					to={"/"}
					className="flex justify-center gap-3">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8"
						alt="MoviWise Logo"
					/>
					<div>MoviWise</div>
				</Link>
				<div className="flex gap-10 ">
					<Link
						to={"/watch-history"}
						className={
							currentPage === "watched"
								? "font-extrabold border-b-2 whitespace-nowrap"
								: "whitespace-nowrap"
						}>
						Watched Favorites
					</Link>
					<Link
						to={"/"}
						className={
							currentPage === "home"
								? "font-extrabold border-b-2"
								: ""
						}>
						Home
					</Link>
					<form
						action={`/search/${searchTerm}`}
						method="get">
						<input
							type="text"
							className="h-6 p-2 text-black placeholder-gray-600 rounded focus:scale-105"
							placeholder="Search Movies"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</form>
				</div>
				<Logout></Logout>
			</div>
			<div className="mr-10 float-end">
				Logged in as:
				<span className="pl-4 font-bold">{upperCaseUserName}</span>
			</div>
		</div>
	);
}
