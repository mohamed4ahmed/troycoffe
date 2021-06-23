import React, { useEffect } from "react";
import InfoSecRegisterMember  from "../../Components/InfoSecRegisterMember/InfoSecRegisterMember";
import { homeObjOne } from "./Data";
const Membership = () => {
	useEffect(() => {
		document.title = "Membership - TROY - Coffee & Tea";
	}, []);
	return (
		<>
			<InfoSecRegisterMember {...homeObjOne} />
		</>
	);
};

export default Membership;