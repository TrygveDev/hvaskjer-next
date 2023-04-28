import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

type Post = {
	title: string;
	description: string;
	img: string;
	category: string;
	datetime?: string;
	location?: string;
	email: string;
};

const Home = (props: Props) => {
	const router = useRouter();
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios.get("/api/getPosts").then((data) => {
			setPosts(data.data);
			console.log(data);
		});
	}, []);

	return (
		<div className="w-screen h-screen overflow-y-scroll flex flex-col items-center pt-5 gap-5">
			{posts &&
				posts.map((obj: any, i) => {
					console.log(obj);
					return (
						<div
							key={i}
							className="w-4/5 flex flex-col items-center gap-4 rounded bg-gray-200"
							onClick={() => {
								router.push("/post/" + obj.id);
							}}
						>
							<Image
								className="w-full rounded-t"
								src={obj.imageSrc}
								width={100}
								height={100}
								alt=""
							/>
							<h1 className="text-2xl pb-5 pl-3 pr-3">
								{obj.title}
							</h1>
						</div>
					);
				})}
		</div>
	);
};

export default Home;
