import React from "react";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaAngellist } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { ImMagicWand } from "react-icons/im";
import { FaFacebookMessenger} from "react-icons/fa"
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
	home,
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

				{home ? (
					<Link to={urlLinkBtn}><ButtonCard>{buttonLabel} <ImMagicWand /> </ButtonCard> </Link>  
				) : <a href={urlLinkBtn} target="_blank" aria-label="Facebook" rel="noreferrer">
					<ButtonCard>{buttonLabel} <FaFacebookMessenger /> </ButtonCard>
				</a>}

				
			</Card>
		</>
	);
};

export default Product;