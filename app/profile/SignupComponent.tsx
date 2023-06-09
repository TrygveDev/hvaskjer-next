import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

type Props = {
	toggleRegister: () => void;
};

const SignupComponent = (props: Props) => {
	const [loading, setLoading] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	return (
		<main className="h-screen w-screen flex items-center flex-col">
			<h1 className="text-4xl font-bold pb-5 pt-10">Lag Bruker</h1>
			<div className="w-3/4 flex flex-col items-center gap-4">
				<div className="w-full flex items-center gap-3 bg-gray-200 p-5 rounded text-lg">
					<FontAwesomeIcon icon={faUser} size="lg" />
					<input
						className="bg-transparent w-full focus:outline-none"
						maxLength={16}
						placeholder="Username"
						id="username"
						disabled={loading}
						onChange={(e) => setUsername(e.target.value)}
					></input>
				</div>
				<div className="w-full flex items-center gap-3 bg-gray-200 p-5 rounded text-lg">
					<FontAwesomeIcon icon={faEnvelope} size="lg" />
					<input
						className="bg-transparent w-full focus:outline-none"
						placeholder="Email"
						id="email"
						disabled={loading}
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>
				<div className="w-full flex items-center gap-3 bg-gray-200 p-5 rounded text-lg">
					<FontAwesomeIcon icon={faLock} size="lg" />
					<input
						className="bg-transparent w-full focus:outline-none"
						placeholder="Password"
						id="password"
						type="password"
						disabled={loading}
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<Button
					disabled={loading}
					variant="contained"
					className="text-black bg-white h-12 text-lg w-full"
					onClick={() => {
						setLoading(true);

						var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
						if (
							username.length > 16 ||
							username.length < 3 ||
							username.match(format)
						) {
							setLoading(false);
							return toast.error(
								"Username must be between 3-16 non special characters!"
							);
						}

						axios
							.post("/api/register", {
								email: email,
								password: password,
								name: username,
							})
							.then(() => {
								toast.success("Bruker oprettet!");
								props.toggleRegister();
							})
							.catch((error) => {
								console.log(error);
								toast.error("Noe gikk galt! Prøv igjen.");
							})
							.finally(() => {
								setLoading(false);
							});
					}}
				>
					Lag bruker
				</Button>
				<div
					onClick={() => {
						props.toggleRegister();
					}}
				>
					Har du en bruker? Logg inn
				</div>
				<Button
					disabled={loading}
					variant="contained"
					className="text-black bg-white h-12 text-lg w-full flex gap-3"
					onClick={() => signIn("google")}
				>
					<FontAwesomeIcon icon={faGoogle} />
					Logg inn med google
				</Button>
			</div>
		</main>
	);
};

export default SignupComponent;
