import React, { useEffect } from "react";
// import {
// 	InfoSectionFull,
// 	StoreMaps,
// 	ProductsList,
// 	InfoSection,
// } from "../../Components";
import InfoSection from "../../Components/InfoSection/InfoSection";
import InfoSectionFull from "../../Components/InfoSectionFull/InfoSectionFull";
import StoreMaps from "../../Components/StoreMaps/StoreMaps";
import ProductsList from "../../Components/Products/ProductList/ProductList";
import { Container } from "../../GlobalStyle";
import { hero, special, feedback } from "./Data";
import { Maps } from "../Stores/Data";

const HomePage = () => {
	useEffect(() => {
		document.title = "Home TROY Coffe & Tea ";
	}, []);

	return (
		<>
			<InfoSectionFull {...hero} />
			<StoreMaps {...Maps} />

			{/* Product list */}
			<div
				style={{
					background: "#101522",
					height: "auto",
					padding: "80px 0",
				}}
			>
				<Container>
					<ProductsList
						lightText={special.lightText}
						lightTextCard={special.lightTextCard}
						buttonLabel={special.buttonLabel}
						id={special.productList.id}
						headlineName={special.productList.headlineName}
						headlineBtn={special.productList.headlineBtn}
						headlineButtonName={special.productList.headlineButtonName}
						productList={special.productList.products}
					/>
				</Container>
			</div>

			<InfoSection {...feedback} />
		</>
	);
};

export default HomePage;