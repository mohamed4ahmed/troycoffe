import React, { useEffect } from "react";
import  InfoSection  from "../../Components/InfoSection/InfoSection";
import { homeObjOne } from "./Data";
const Blog = () => {
	useEffect(() => {
		document.title = "Blog - TROY - Coffee & Tea";
	}, []);
	return (
		<>
			<InfoSection {...homeObjOne} />
		</>
	);
};

export default Blog;