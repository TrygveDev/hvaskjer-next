import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button } from "@mui/material";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type Props = {
	session: Session;
};

const ProfileComponent = (props: Props) => {
	const session = props.session;
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

			{session.user.type === "admin" && (
				<div className="pt-10">
					<Button
						variant={"contained"}
						className="h-16 w-full text-black"
					>
						Lag en post
					</Button>
				</div>
			)}
		</main>
	);
};

export default ProfileComponent;
