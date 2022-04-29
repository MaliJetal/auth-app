import React from "react";
import styled from "styled-components";
import { Link as RouterLink, useLocation } from "react-router-dom";
import GiHamburgerMenu from 'react-icons/gi';

const HeaderWrapper = styled.header`
	height: 60px;
	width: 100%;
	position: fixed;
	top: 0;
	background: linear-gradient(to right, #f8049c, #fdd54f);
	border-bottom: 2px solid #fdd54f;

  @media(min-width:750px){
    
  }
`;

const Nav = styled.nav`
	margin: 60px 0 2px 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	padding: 1em;
	border-bottom: 2px solid #fdd54f;

	@media (min-width: 750px) {
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: right;
		margin: auto;
		padding: 0.5em;
	}
`;

const Link = ({ isActive, children, ...props }) => {
	return <RouterLink {...props}>{children}</RouterLink>;
};

const StyledLink = styled(Link)`
	font-family: "Open Sans";
	padding: 0.5em 1em;
	display: block;
	text-align: center;
	margin: auto 0;
	font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
	color: black;
`;

export function Header() {
	const { pathname } = useLocation();
	return (
		<HeaderWrapper>
			<Nav>
				<StyledLink to='/home' isActive={pathname === "/"}>
					Home
				</StyledLink>
				<StyledLink to='/login' isActive={pathname === "/login"}>
					Login
				</StyledLink>
			</Nav>
		</HeaderWrapper>
	);
}
