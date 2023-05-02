import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const body = await request.json();
	const { id } = body;
	const post = await prisma.post.findUnique({
		where: {
			id: id,
		},
	});

	return NextResponse.json(post);
}
