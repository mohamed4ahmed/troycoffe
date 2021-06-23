import React, { useEffect } from "react";
const Grab = () => {
	useEffect(() => {
		document.title = "Our stores - TROY - Coffee & Tea";
		window.location =
			"https://www.facebook.com/TROYcafeee";
	}, []);
	return <></>;
};

export default Grab;