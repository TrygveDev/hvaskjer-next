import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button } from "@mui/material";
import axios from "axios";
import { Session } from "next-auth";
import Email from "next-auth/providers/email";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
	session: Session;
};

const ProfileComponent = (props: Props) => {
	const router = useRouter();
	const session = props.session;
	const [accountType, setAccountType] = useState();
	axios
		.post("/api/accountType", { email: props.session.user.email })
		.then((data) => {
			setAccountType(data.data);
		})
		.catch((error) => {
			console.log(error);
		});

	return (
		<main className="h-screen w-screen flex flex-col items-center">
			<h1 className="text-4xl font-bold pt-10 pb-5">Din profil</h1>
			<Avatar sx={{ width: 123, height: 123 }} />
			<p className="text-2xl pt-5">Navn: {session.user.name}</p>
			<p className="text-2xl">Email: {session.user.email}</p>
			<Button
				variant="contained"
				className="text-black bg-white h-12 text-lg"
				onClick={() => {
					signOut();
				}}
			>
				Logg ut
			</Button>

			{accountType === "admin" && (
				<div className="pt-10">
					<Button
						variant={"contained"}
						className="h-16 w-full text-black"
						onClick={() => router.push("/createPost")}
					>
						Lag en post
					</Button>
				</div>
			)}
		</main>
	);
};

export default ProfileComponent;
