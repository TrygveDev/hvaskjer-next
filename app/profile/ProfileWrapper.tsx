import React, { useCallback, useState } from "react";
import ProfileComponent from "./ProfileComponent";
import SignupComponent from "./SignupComponent";
import SigninComponent from "./SigninComponent";
import { Session } from "next-auth";

type Props = {
	session: Session;
};

const ProfileWrapper = (props: Props) => {
	const [isRegistering, setIsRegistering] = useState(false);
	const toggleRegister = useCallback(() => {
		console.log("toggle ", isRegistering);
		setIsRegistering((value) => !value);
	}, [isRegistering]);

	const session = props.session;

	return session?.user ? (
		<ProfileComponent session={session} />
	) : isRegistering ? (
		<SignupComponent toggleRegister={toggleRegister} />
	) : (
		<SigninComponent toggleRegister={toggleRegister} />
	);
};

export default ProfileWrapper;
