import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import {
	Card,
	CardDescription,
	CardImage,
	Img,
	TrendLabel,
	NewLabel,
	CardTitle,
	ButtonCard,
} from "./Product-style";
const Product = ({
	lightTextCard,
	cardTitle,
	img,
	description,
	urlLinkBtn,
	buttonLabel,
	trend,
	newProduct,
}) => {
	return (
		<>
			<Card>
				<CardImage>
					<Img effect="blur" src={img} />
					{newProduct && (
						<NewLabel>
							new <FaAngellist />
						</NewLabel>
					)}
					{trend && (
						<TrendLabel>
							<AiOutlineLike /> Bestseller
						</TrendLabel>
					)}
				</CardImage>
				<CardTitle lightTextCard={lightTextCard}>{cardTitle}</CardTitle>
				<CardDescription>{description}</CardDescription>
				
				<a href={urlLinkBtn} target="_blank" aria-label="Facebook" rel="noreferrer">
					<ButtonCard>{buttonLabel} <FaMapMarkedAlt /> </ButtonCard>
				</a>
			</Card>
		</>
	);
};

export default Product;