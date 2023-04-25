// "use client";

import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import getCurrentUser from "../actions/getCurrentUser";
import { signIn } from "next-auth/react";

export default async function Profile() {
	const currentUser = await getCurrentUser();
	return currentUser ? (
		<main className="h-screen w-screen flex flex-col">
			<h1 className="text-4xl font-bold">Profile</h1>
			<p className="text-2xl font-semibold">{currentUser.email}</p>
		</main>
	) : (
		<main className="h-screen w-screen flex flex-col">
			<h1 className="text-4xl font-bold">Profile</h1>
			{/* <div className="flex items-end"> */}
			{/* <FontAwesomeIcon icon={faEnvelope} /> */}
			{/* <TextField id="email" label="Email" variant="standard" /> */}
			{/* </div> */}
			<div>
				<input type="text" />
				<input type="text" />
				<input type="password" />
				<button onClick={() => signIn("")}>signup</button>
			</div>
		</main>
	);
}
