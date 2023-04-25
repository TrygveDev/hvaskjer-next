import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Hva Skjer",
	description: "Få med deg det som skjer på drømtorp nå!",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();

	return (
		<html lang="en">
			<body className={inter.className}>
				<ClientOnly>
					<Navbar />
				</ClientOnly>
				{children}
			</body>
		</html>
	);
}
