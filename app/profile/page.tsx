"use client";

import { Button, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { getSession, signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default async function Profile() {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [username, setUsername] = useState(null);

	const router = useRouter();
	const session = await getSession();
	return session?.user ? (
		<main className="h-screen w-screen flex flex-col">
			<h1 className="text-4xl font-bold">Profile</h1>
			<p className="text-2xl font-semibold">{session.user?.email}</p>
		</main>
	) : (
		<main className="h-screen w-screen flex flex-col">
			<h1 className="text-4xl font-bold">Profile</h1>
			<div className="flex items-end">
				<FontAwesomeIcon icon={faUser} />
				<TextField
					id="username"
					label="Username"
					variant="standard"
					disabled={isLoading}
					onChange={(e: any) => setUsername(e.target.value)}
				/>
			</div>
			<div className="flex items-end">
				<FontAwesomeIcon icon={faEnvelope} />
				<TextField
					id="email"
					label="Email"
					variant="standard"
					disabled={isLoading}
					onChange={(e: any) => setEmail(e.target.value)}
				/>
			</div>
			<div className="flex items-end">
				<FontAwesomeIcon icon={faLock} />
				<TextField
					id="password"
					label="Password"
					variant="standard"
					type="password"
					disabled={isLoading}
					onChange={(e: any) => setPassword(e.target.value)}
				/>
			</div>
			<Button
				variant="outlined"
				disabled={isLoading}
				onClick={() => {
					console.log(username, password, email);
					setIsLoading(true);
					axios
						.post("/api/register", {
							data: {
								email: email,
								password: password,
								name: username,
							},
						})
						.then(() => {
							console.log("success");
						})
						.catch((error: any) => {
							console.log(error);
						})
						.finally(() => {
							setIsLoading(false);
						});
				}}
			>
				Lag Bruker
			</Button>
			<Button
				variant="outlined"
				disabled={isLoading}
				onClick={() => {
					setIsLoading(true);
					signIn("credentials", {
						data: {
							email: email,
							password: password,
							username: username,
						},
						redirect: false,
					}).then((callback) => {
						setIsLoading(false);
						if (callback?.ok) {
							router.refresh();
						}

						if (callback?.error) {
							console.log(callback.error);
						}
					});
				}}
			>
				Logg inn
			</Button>
		</main>
	);
}
