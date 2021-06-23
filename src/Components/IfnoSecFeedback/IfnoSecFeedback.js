import React, { useState } from "react";
import { Container, Button } from "../../GlobalStyle";
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	Form,
	FormLabel,
	FormSelect,
	FormSelectOption,
	FormTextarea,
	FormInput,
	StarsRating,
} from "./IfnoSecFeedback-style";

import { FaStar } from "react-icons/fa";

// import { firebase } from "../../lib/firebase";
// import { getUUID } from "../../utils";

const InfoSecFeedback = ({
	lightBg,
	imgStart,
	lightText,
	headline,
	lightTextDesc,
	description,
	buttonLabel,
	img,
	alt,
	start,
}) => {
	const [category, setCategory] = useState("");
	const [review, setReview] = useState("");
	const [star, setStar] = useState("");
	const [starReview, setStarReview] = useState("");
	const [descriptionEmail, setDescriptionEmail] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [displayEmail, setDisplayEmail] = useState(false);

	const handleFormSubmit = (event) => {
		event.preventDefault();

		// firebase
		// 	.firestore()
		// 	.collection("feedback")
		// 	.add({
		// 		id: getUUID(),
		// 		dateCreate: new Date(),
		// 		star: star,
		// 		category: category,
		// 		review: review,
		// 		emailAddress: emailAddress,
		// 	})
		// 	.then(function () {
		// 		alert("Thank you for comment.");
		// 		window.location = "/";
		// 	})
		// 	.catch(function (error) {
		// 		console.error("Error writing document: ", error);
		// 	});
	};

	const isInvalid = category === "" || review === "" || star === "";

	const ratingChanged = (newRating) => {
		const textDescription = "(*) Please provide email so that TROY can better support you ";
		const textStarReview = "What do you feel needs to change?";
		setStar(newRating);
		switch (newRating) {
			case 1:
				setDisplayEmail(true);
				setStarReview(textStarReview);
				setDescriptionEmail(textDescription);
				break;
			case 2:
				setDisplayEmail(true);
				setStarReview(textStarReview);
				setDescriptionEmail(textDescription);
				break;
			case 3:
				setDisplayEmail(true);
				setStarReview(textStarReview);
				setDescriptionEmail(textDescription);
				break;
			case 4:
				setDisplayEmail(false);
				setStarReview("What do you feel is not good?");
				break;
			case 5:
				setDisplayEmail(false);
				setStarReview("Great");
				break;
			default:
				setDisplayEmail(false);
				setStarReview("");
		}
	};

	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
								<Form>
									<StarsRating
										count={5}
										onChange={ratingChanged}
										size={60}
										isHalf={false}
										emptyIcon={<FaStar />}
										fullIcon={<FaStar />}
										activeColor="#ffd700"
									/>
									<Subtitle lightTextDesc={lightTextDesc}>
										{starReview}
									</Subtitle>
									<FormLabel htmlFor="">List of comments:</FormLabel>
									<FormSelect
										value={category}
										onChange={({ target }) => setCategory(target.value)}
									>
										<FormSelectOption>Select a category</FormSelectOption>
										<FormSelectOption>Space</FormSelectOption>
										<FormSelectOption>Sound</FormSelectOption>
										<FormSelectOption>Staff</FormSelectOption>
										<FormSelectOption>Drinks</FormSelectOption>
										<FormSelectOption>Food</FormSelectOption>
										<FormSelectOption>Timeserver</FormSelectOption>
										<FormSelectOption>WIFI</FormSelectOption>
									</FormSelect>
									<FormLabel htmlFor="">Share your opinion:</FormLabel>
									<FormTextarea
										type="text"
										value={review}
										onChange={({ target }) => setReview(target.value)}
										rows="4"
									></FormTextarea>
									{displayEmail === true ? (
										<>
											<FormLabel htmlFor="">Your email: (*)</FormLabel>
											<FormInput
												type="email"
												value={emailAddress}
												onChange={({ target }) => setEmailAddress(target.value)}
											/>
										</>
									) : null}
									<Button
										disabled={isInvalid}
										type="submit"
										onClick={handleFormSubmit}
									>
										{buttonLabel}
									</Button>
								</Form>
								{displayEmail === true ? (
									<>
										<Subtitle lightTextDesc={lightTextDesc}>
											{descriptionEmail}
										</Subtitle>
									</>
								) : null}
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSecFeedback;