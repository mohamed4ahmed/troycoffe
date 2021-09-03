import React, { useEffect } from "react";
import  StoreMaps  from "../../Components/StoreMaps/StoreMaps";
import { Maps, Grab, Loship } from "./Data";

const Stores = () => {
	useEffect(() => {
		document.title = "Our stores - TROY - Coffee & Tea";
	}, []);

	return (
		<>
			<StoreMaps {...Maps} />
			<StoreMaps {...Grab} />
			<StoreMaps {...Loship} />
		</>
	);
};

export default Stores;