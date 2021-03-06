import React from "react";
import { Container, Button } from "../../GlobalStyle";
import { FaFacebookMessenger, FaMapMarkedAlt } from "react-icons/fa";
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
} from "./StoreMaps-style";
import Maps from "./Maps/Maps";
const StoreMaps = ({
	lightBg,
	imgStart,
	lightTopLine,
	topLine,
	lightText,
	headline,
	lightTextDesc,
	address,
	phone,
	email,
	primary,
	urlLinkBtn,
	buttonLabel,
	maps,
	start,
	img,
	alt,
	home,
}) => {
	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{address}</Subtitle>
								<Subtitle lightTextDesc={lightTextDesc}>{phone}</Subtitle>
								<Subtitle
									lightTextDesc={lightTextDesc}
									style={{ marginBottom: "35px" }}
								>
									{email}
								</Subtitle>
								<a href={urlLinkBtn} target="_blank" rel="noopener noreferrer">
									<Button big fontBig primary={primary}>
									{home ?  <FaFacebookMessenger /> : <FaMapMarkedAlt />}	 {buttonLabel}
									</Button>
								</a>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							{maps ? ( 
								<Maps /> 
							) : (
								<ImgWrapper start={start}>
									<Img src={img} alt={alt} />
								</ImgWrapper>
							)}
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default StoreMaps;