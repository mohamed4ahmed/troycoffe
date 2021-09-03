import webp from "../../assets/img/IMG-20210617-WA0005.jpg" ; 
import feedBack from "../../assets/img/feedback.svg" ; 
import moka from "../../assets/img/products/hot-Drink/moka.jpg"; 
import espressoDouble from "../../assets/img/products/hot-Drink/espresso-double.jpg"; 
import choclateMilkshake from "../../assets/img/products/Milk-Shake/choclate-milkshake.jpg"; 
import blueberry from "../../assets/img/products/juice/blueberry.jpg" ; 
import iceMars from "../../assets/img/products/Milk-Shake/ice-mars.jpg" ; 
import wafelFwakh from "../../assets/img/products/wafel/wafel-fwakh.jpg"; 
import one from "../../assets/img/products/food/one.jpg";
import two from "../../assets/img/products/food/two.jpg";
import three from "../../assets/img/products/food/three.jpg";
import five from "../../assets/img/products/food/five.jpg";

export const hero = {
	primary: true,
	lightTopLine: true,
	lightText: true,
	lightTextDesc: true,
	headline: "TROY ",
	description: "Coffee & Tea",
	buttonLabel: "MENU",
	urlLinkBtn: "/products",
	urlImg: webp,
};

export const feedback = {
	primary: true,
	lightBg: false,
	lightTopLine: false,
	lightText: true,
	lightTextDesc: true,
	home : true,
	topLine: "TROY",
	headline: "Rate TROY's service.",
	description:
		" ! علي تحسن الخدمه لخدمتك بشكل افضل TROY  كل تعليق سوف يساعد",
	buttonLabel: "Evaluate and comment",
	urlLinkBtn: "/feedback",
	imgStart: true,
	img: feedBack,
	alt: "feedback",
	start: "",
};

export const special = {
	lightBg: false,
	lightText: true,
	lightTextCard: false,
	buttonLabel: "Detail",
	productList: {
		id: "special",
		headlineName: "menu",
		headlineBtn: true,
		headlineButtonName: "SEE ALL MENU",
		products: [
			{
				home :true,
				cardTitle: "Meat Burger",
				img: one,
				description: "25.00 LE",

				urlLinkBtn: "/products",
				newProduct: true,
				trend: true,
			},
			{
				home :true,
				cardTitle: "Broasted chicken",
				img: two,
				description: "30.00 LE",

				urlLinkBtn: "/products",
				newProduct: true,
				trend: true,
			},
			{
				home :true,
				cardTitle: "Chicken burger",
				img: three,
				description: "25.00 LE",

				urlLinkBtn: "/products",
				newProduct: true,
				trend: true,
			},
			{
				home :true,
				cardTitle: "Zinger",
				img: five,
				description: "25.00 LE",

				urlLinkBtn: "/products",
				newProduct: true,
				trend: true,
			},
			{
				home :true,
				cardTitle: "Moka",
				img: moka,
				description: "22.00 LE",

				urlLinkBtn: "/products",
				newProduct: true,
				trend: true,
			},
			{
				home :true,
				cardTitle: "Double Espresso",
				img: espressoDouble,
				description: "15.00 LE",

				urlLinkBtn: "/products",
				trend: true,
			},
			{
				home :true,
				cardTitle: "MilkShake Chocolate",
				img: choclateMilkshake,
				description: "25.00 LE",

				urlLinkBtn: "/products",
				newProduct: true,
			},
			{
				home :true,
				cardTitle: "Blueberry",
				img: blueberry,
				description: "18.00 LE",

				urlLinkBtn: "/products",
				trend: true,
			},
			{
				home :true,
				cardTitle: "Ice Mars",
				img: iceMars,
				description: "25.00 LE",

				urlLinkBtn: "/products",
				trend: true,
			},
			{
				home :true,
				cardTitle: "Fruit Waffle",
				img: wafelFwakh,
				description: "40.00 LE",

				urlLinkBtn: "/products",
				trend: true,
			},
		],
	},
};