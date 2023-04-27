"use client";

import { getSession } from "next-auth/react";
import ProfileWrapper from "./ProfileWrapper";

export default async function Profile() {
	const session = await getSession();
	return <ProfileWrapper session={session} />;
}
