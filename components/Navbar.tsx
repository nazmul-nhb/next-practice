import React from "react";
import Link from "next/link";

const Navbar:React.FC = () => {
	return (
		<nav className="h-[10vh] flex gap-6 items-center justify-around">
			<Link href={"/"}>Home</Link>
			<Link href={"/about"}>About</Link>
			<Link href={"/exit"}>Exit</Link>
		</nav>
	);
};

export default Navbar;
