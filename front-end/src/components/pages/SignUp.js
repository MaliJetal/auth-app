import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useToken } from "../auth/useToken";
import { Pagelayout, Card, Input, FormButton } from "../common";

const SignUp = () => {
	const [token, setToken] = useToken();
	const [errorMessage] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const history = useLocation();

	const onSignUpCLicked = async () => {
		const response = await axios.post("/api/signup", {
			email: emailValue,
			password: password,
		});

		const { tokenValue } = response.data;
		setToken(tokenValue);
		history.push("/");
	};

	return (
		<>
			<Pagelayout>
				<Card>
					<h1>SignUp</h1>
					{errorMessage && <div className='fail'>{errorMessage}</div>}
					<Input
						placeholder='someone@gmail.com'
						value={emailValue || ""}
						onChange={(e) => setEmailValue(e.target.value)}
					/>
					<Input
						placeholder='password'
						value={password || ""}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Input
						placeholder='confirmPassword'
						value={confirmPassword || ""}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<FormButton
						disabled={!emailValue || !password || password !== confirmPassword}
						onClick={onSignUpCLicked}
					>
						SignUp
					</FormButton>
					<FormButton onClick={() => history.push("/login")}>
						Already have an account? SignIn
					</FormButton>
				</Card>
			</Pagelayout>
		</>
	);
};

export default SignUp;
