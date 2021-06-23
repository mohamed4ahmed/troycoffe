import React, { useEffect } from "react";
import  InfoSecFeedback  from "../../Components/IfnoSecFeedback/IfnoSecFeedback";
import { homeObjOne } from "./Data";
const Feedback = () => {
	useEffect(() => {
		document.title = "Feedback - TROY - Coffee & Tea";
	}, []);
	return <>{<InfoSecFeedback {...homeObjOne} />}</>;
};

export default Feedback;