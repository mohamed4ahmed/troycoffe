import React, { useEffect } from "react";
import  ProductsComponent  from "../../Components/Products/Products";
import { products } from "./Data";
const Products = () => {
	useEffect(() => {
		document.title = "Menu - TROY - Coffee & Tea";
	}, []);
	return (
		<>
			<ProductsComponent products={products} />
		</>
	);
};

export default Products;