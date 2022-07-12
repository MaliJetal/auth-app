import styled from "styled-components";
import { theme } from "./constants/theme.js";

export const Button = styled.button`
	display: block;
	background: ${theme.color["base-90"]};
	color: ${theme.color["base-10"]};
	border: none;
	box-shadow: none;
`;

export const FormButton = styled.button`
	display: block;
	background-color: ${theme.color["base-10"]};
	border: 2px solid gray;
	border-radius: 5px;
	cursor: pointer;
	margin: 5px;
	padding: 5px;
	width: 68%;
`;
