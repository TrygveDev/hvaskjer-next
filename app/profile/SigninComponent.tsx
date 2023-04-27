import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
	toggleRegister: () => void;
};

const SigninComponent = (props: Props) => {
	const [loading, setLoading] = useState(false);

	let email = "";
	let password = "";

	const router = useRouter();

	return (
		<main className="h-screen w-screen flex items-center flex-col">
			<h1 className="text-4xl font-bold">Profile</h1>
			<div className="w-3/4 flex flex-col items-center gap-4">
				<div className="w-full flex items-center gap-3 bg-gray-200 p-5 rounded text-lg">
					<FontAwesomeIcon icon={faEnvelope} size="lg" />
					<input
						className="bg-transparent w-full focus:outline-none"
						maxLength={16}
						placeholder="Email"
						id="email"
						disabled={loading}
						onChange={(e) => (email = e.target.value)}
					></input>
				</div>
				<div className="w-full flex items-center gap-3 bg-gray-200 p-5 rounded text-lg">
					<FontAwesomeIcon icon={faLock} size="lg" />
					<input
						className="bg-transparent w-full focus:outline-none"
						maxLength={16}
						placeholder="Password"
						id="password"
						type="password"
						disabled={loading}
						onChange={(e) => (password = e.target.value)}
					></input>
				</div>
				<Button
					disabled={loading}
					variant="contained"
					className="text-black bg-white h-12 text-lg w-full"
					onClick={() => {
						setLoading(true);

						signIn("credentials", {
							email: email,
							password: password,
							redirect: false,
						}).then((callback) => {
							setLoading(false);
							console.log(callback);
							if (callback.error) {
								return toast.error(callback.error);
							}
							if (callback?.ok) {
								console.log(callback);
								toast.success("Logged in successfully!");
								router.refresh();
							}
						});
					}}
				>
					Logg Inn
				</Button>
				<div
					onClick={() => {
						props.toggleRegister();
					}}
				>
					Har du ikke en bruker? Lag en
				</div>
			</div>
		</main>
	);
};

export default SigninComponent;
