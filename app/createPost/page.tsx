"use client";

import { getSession } from "next-auth/react";
import Form from "./Form";

export default async function Profile() {
	const session = await getSession();
	return (
		<div className="w-screen h-screen flex flex-col items-center">
			<h1 className="text-4xl pt-5 pb-5">Lag Post</h1>
			<Form email={session.user.email} />
		</div>
	);
}
