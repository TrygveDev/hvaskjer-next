"use client";

import Post from "./Post";

export default function Page({ params }: any) {
	return (
		<main className="h-screen w-screen flex flex-col">
			<Post id={params.postId} />
		</main>
	);
}
