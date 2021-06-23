import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
	MobileIcon,
	Nav,
	NavbarContainer,
	NavLogo,
	NavLogoImg,
	NavMenu,
	NavItem,
	NavLinks,
} from "./Navbar-style";
import logoImg from "../../assets/img/logo-web-white.png";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const closeMobileMenu = () => {
		setClick(false);
	};

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/">
							<NavLogoImg onClick={closeMobileMenu} src={logoImg} alt="logo" />
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to="/">Home page</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/products">Product</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/blog">News</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/stores">Store</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/membership">Member</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/about">About us</NavLinks>
							</NavItem>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;