"use client";
import Link from "next/link";

const Error = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="relative w-16 h-16 mb-4">
				{/* Animated Exclamation Mark */}
				<div className="absolute inset-0 rounded-full border-8 border-red-200 border-t-red-600 animate-spin"></div>
				<span className="absolute inset-0 text-4xl font-bold text-red-600 flex items-center justify-center animate-pulse">
					!
				</span>
			</div>

			{/* Error message */}
			{/* <h1 className="text-4xl font-bold text-gray-300 mb-2 animate-pulse">
				Error 404
			</h1> */}
			<p className="text-lg text-gray-200 mb-6">
				Oops! Something went wrong.
			</p>

			{/* Retry Button */}
			<Link
				href="/"
				className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 animate-bounce"
			>
				Go Home
			</Link>
		</div>
	);
};

export default Error;
