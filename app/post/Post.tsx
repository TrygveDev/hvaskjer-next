import axios from "axios";
import { useRouter } from "next/navigation"
import React, { useEffect } from "react";

type Props = {};

const Post = (props: Props) => {
    const router = useRouter;
    const { pid } = router.query
	useEffect(() => {
		axios.post("/api/getPost", {id: }).then((data) => {
			console.log(data);
		});
	}, []);

	return <div>Post</div>;
};

export default Post;
