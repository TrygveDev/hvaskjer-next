import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { toast } from "react-hot-toast";

type Props = {
	email: string;
};

const Form = (props: Props) => {
	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [img, setImg] = useState("");
	const [category, setCategory] = useState("");
	const [datetime, setDatetime] = React.useState<Dayjs | null>(
		dayjs("2022-04-17T15:30")
	);
	const [location, setLocation] = useState("");

	const router = useRouter();
	return (
		<div className="w-3/4 flex flex-col items-center gap-4">
			<div className="w-full flex items-center gap-3 bg-gray-200 p-5 rounded text-lg">
				<input
					className="bg-transparent w-full focus:outline-none"
					placeholder="Tittel"
					id="title"
					disabled={loading}
					onChange={(e) => setTitle(e.target.value)}
				></input>
			</div>
			<div className="w-full flex items-center gap-3 bg-gray-200 p-5 rounded text-lg">
				<textarea
					className="bg-transparent w-full focus:outline-none h-44"
					placeholder="Beskrivelse"
					id="description"
					disabled={loading}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
			</div>
			<div className="w-full flex items-center gap-3 bg-gray-200 p-5 rounded text-lg">
				<input
					className="bg-transparent w-full focus:outline-none h-full"
					placeholder="Bilde URL"
					id="img"
					disabled={loading}
					onChange={(e) => setImg(e.target.value)}
				></input>
			</div>
			<div className="w-full flex items-center gap-3 bg-gray-200 p-5 rounded text-lg">
				<select
					className="bg-transparent w-full focus:outline-none h-full"
					placeholder="Kategori"
					id="imgUrl"
					disabled={loading}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value={null}>Velg en kategori</option>
					<option value="nyhet">Nyhet</option>
					<option value="Aktivitet">Aktivitet</option>
				</select>
			</div>
			{category === "Aktivitet" && (
				<>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateTimePicker
							className="w-full bg-gray-200 border-none"
							label="Tidspunkt"
							value={datetime}
							onChange={(newValue) => setDatetime(newValue)}
						/>
					</LocalizationProvider>
					<div className="w-full flex items-center gap-3 bg-gray-200 p-5 rounded text-lg">
						<input
							className="bg-transparent w-full focus:outline-none h-full"
							placeholder="Sted"
							id="location"
							disabled={loading}
							onChange={(e) => setLocation(e.target.value)}
						></input>
					</div>
				</>
			)}
			<Button
				disabled={loading}
				variant="contained"
				className="text-black bg-white h-12 text-lg w-full"
				onClick={() => {
					axios
						.post("/api/createPost", {
							email: props.email,
							title: title,
							category: category,
							description: description,
							img: img,
							datetime: datetime,
							location: location,
						})
						.then((res) => {
							console.log(res);
							toast.success("Posten ble lagt ut");
							router.push("/");
						});
				}}
			>
				Legg ut
			</Button>
		</div>
	);
};

export default Form;

//   imageSrc String
//   createdAt DateTime @default(now())
//   category String
//   userId String
