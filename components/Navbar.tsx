"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
	const pathName = usePathname();
	const router = useRouter();

	const navLinks = [
		{ path: "/", title: "Home" },
		{ path: "/products", title: "Products" },
		{ path: "/users", title: "Users" },
		{ path: "/about", title: "About" },
		{ path: "/exit", title: "Exit" },
	];

	const handleLogout = () => {
		router.push("/exit");
	};

	if (pathName.includes("users")) {
		const links = [
			{ path: "/", title: "Home" },
			{ path: "/users/login", title: "login" },
			{ path: "/users/logout", title: "Logout" },
		];
		return (
			<nav className="h-[10vh] flex gap-6 items-center justify-around">
				{links.map((link) => (
					<Link
						className={
							pathName === link.path
								? "pb-1 border-b border-white"
								: "pb-1 border-b border-transparent"
						}
						key={link.path}
						href={link.path}
					>
						{link.title}
					</Link>
				))}
			</nav>
		);
	}

	return (
		<nav className="h-[10vh] flex gap-6 items-center justify-around">
			{navLinks.map((link) => (
				<Link
					className={
						pathName === link.path
							? "pb-1 border-b border-white"
							: "pb-1 border-b border-transparent"
					}
					key={link.path}
					href={link.path}
				>
					{link.title}
				</Link>
			))}
			<button onClick={handleLogout}>Sign Out</button>
		</nav>
	);
};

export default Navbar;
