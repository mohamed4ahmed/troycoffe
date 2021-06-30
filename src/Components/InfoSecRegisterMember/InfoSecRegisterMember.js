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
	FormInput,
	FormLabel,
	FormSelect,
	FormSelectOption,
} from "./InfoSecRegisterMember-style";

import { db } from "../../firebase/firebase";
import { getUUID } from "../../utils";

const InfoSecRegisterMember = ({
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
	const [phoneNumber, setPhoneNumber] = useState("");
	const [name, setName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [dob, setDob] = useState("");
	const [gender, setGender] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();

		db
			.collection("members")
			.add({
				id: getUUID(),
				dateCreate: new Date(),
				phoneNumber: phoneNumber,
				name: name,
				emailAddress: emailAddress,
				dob: dob,
				gender: gender,
			})
			.then(function () {
				alert("Member registration is successful.");
				window.location = "/troy";
			})
			.catch(function (error) {
				console.error("Error writing document: ", error);
			});
	};

	const isInvalid =
		phoneNumber === "" ||
		name === "" ||
		emailAddress === "" ||
		dob === "" ||
		gender === "";

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
									<FormLabel htmlFor="">First and last name:</FormLabel>
									<FormInput
										type="text"
										value={name}
										onChange={({ target }) => setName(target.value)}
									/>
									<FormLabel htmlFor="">Date of birth:</FormLabel>
									<FormInput
										type="date"
										value={dob}
										onChange={({ target }) => setDob(target.value)}
									/>
									<FormLabel htmlFor="">Gender:</FormLabel>
									<FormSelect
										value={gender}
										onChange={({ target }) => setGender(target.value)}
									>
										<FormSelectOption>Choose your gender</FormSelectOption>
										<FormSelectOption>male</FormSelectOption>
										<FormSelectOption>Female</FormSelectOption>
									</FormSelect>
									<FormLabel htmlFor="">Email:</FormLabel>
									<FormInput
										type="email"
										value={emailAddress}
										onChange={({ target }) => setEmailAddress(target.value)}
									/>
									<FormLabel htmlFor="">phone number:</FormLabel>
									<FormInput
										type="text"
										value={phoneNumber}
										onChange={({ target }) => setPhoneNumber(target.value)}
									/>
									<Button
										disabled={isInvalid}
										type="submit"
										onClick={handleFormSubmit}
									>
										{buttonLabel}
									</Button>
								</Form>
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

export default InfoSecRegisterMember;