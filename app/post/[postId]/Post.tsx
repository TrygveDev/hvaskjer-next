import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
	id: string;
};

type Data = {
	id: string;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	category: string;
	datetime: string;
	location: string;
	type: string;
};

const Post = (props: Props) => {
	const router = useRouter;
	const [data, setData] = useState<Data>();
	const [inizialized, setInizialized] = useState(false);
	useEffect(() => {
		axios.post("/api/getPost", { id: props.id }).then((data) => {
			console.log(data);
			setData(data.data);
			setInizialized(true);
		});
	}, [props.id]);

	return (
		inizialized &&
		(data.category === "nyhet" ? (
			<div className="w-screen h-screen">
				<div className="w-full h-56 overflow-hidden">
					<Image
						className="w-full"
						src={data.imageSrc}
						alt=""
						width={100}
						height={100}
					></Image>
				</div>

				<div className="pl-5 pr-5 pt-5 text-2xl font-bold">
					{data.title}
				</div>
				<div className="pl-5 text-slate-400">
					{new Date(data.createdAt).toLocaleString()}
				</div>
				<div className="p-5 text-xl">{data.description}</div>
			</div>
		) : (
			<div className="w-screen h-screen">
				<div className="w-full h-56 overflow-hidden">
					<Image
						className="w-full"
						src={data.imageSrc}
						alt=""
						width={100}
						height={100}
					></Image>
				</div>

				<div className="pl-5 pr-5 pt-5 text-2xl font-bold">
					{data.title}
				</div>
				<div className="pl-5 text-slate-400">
					{new Date(data.createdAt).toLocaleString()}
				</div>
				<div className="pl-5 pt-5 font-semibold">
					Sted: {data.location}
				</div>
				<div className="pl-5 font-semibold">
					Tid: {new Date(data.datetime).toLocaleString()}
				</div>
				<div className="p-5 text-xl">{data.description}</div>
			</div>
		))
	);
};

export default Post;
