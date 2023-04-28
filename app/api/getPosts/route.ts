import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
	const posts = await prisma.post.findMany();
	return NextResponse.json(posts);
}
