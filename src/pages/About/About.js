import React, { useEffect } from "react";
import  InfoSection  from "../../Components/InfoSection/InfoSection";
import { homeObjOne } from "./Data";
const About = () => {
	useEffect(() => {
		document.title = "About us - TROY - Coffee & Tea";
	}, []);
	return (
		<>
			<InfoSection {...homeObjOne} />
		</>
	);
};

export default About;