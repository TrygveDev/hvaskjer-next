"use client";

import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
	const router = useRouter();
	return (
		<div className="w-screen h-screen flex flex-col-reverse z-50 pointer-events-none absolute">
			<BottomNavigation
				sx={{ backgroundColor: "#f7f7f7" }}
				onChange={(event, newValue) => {
					switch (newValue) {
						case 0:
							router.push("/");
							break;
						case 1:
							router.push("/profile");
							break;
					}
				}}
			>
				<BottomNavigationAction
					className="pointer-events-auto"
					label="Hjem"
					icon={<FontAwesomeIcon icon={faHome} />}
				/>
				<BottomNavigationAction
					className="pointer-events-auto"
					label="Profil"
					icon={<FontAwesomeIcon icon={faUser} />}
				/>
			</BottomNavigation>
		</div>
	);
};

export default Navbar;
