import React from "react";
import logoImg from "../../assets/img/logo-web-white.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
	FooterContainer,
	LogoImg,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights,
	WebsiteRightsText,
	Tins,
} from "./Footer-style";

const Footer = () => {
	return (
		<FooterContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to="/troy">
						<LogoImg src={logoImg} alt="logo" />
					</SocialLogo>
					<WebsiteRights>
                        
						<WebsiteRightsText>
							Copyright © 2021 TROY Coffee
						</WebsiteRightsText>
						<WebsiteRightsText>
							Design by :{" "}
							<Tins
								href="https://mohamed4ahmed.github.io/Temps/"
								target="_blank"
								aria-label="Facebook"
							>
								Mohamed 
							</Tins>
						</WebsiteRightsText>
					</WebsiteRights>
					<SocialIcons>
						<SocialIconLink
							href="https://www.facebook.com/TROYcafeee"
							target="_blank"
							aria-label="Facebook"
						>
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink
							href="https://www.instagram.com/troy__coffee/"
							target="_blank"
							aria-label="Facebook"
						>
							<FaInstagram />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
