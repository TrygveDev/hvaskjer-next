import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const body = await request.json();
	const { email, title, category, description, img, datetime, location } =
		body;
	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	});

	const post = await prisma.post.create({
		data: {
			title: title,
			category: category,
			description: description,
			imageSrc: img,
			datetime: datetime,
			location: location,
			user: {
				connect: {
					id: user.id,
				},
			},
		},
	});

	return NextResponse.json(post);
}
