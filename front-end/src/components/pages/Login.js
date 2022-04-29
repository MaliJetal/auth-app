import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Pagelayout, Card, Input, FormButton } from "components/common";

function Login() {
	const [errorMessage, setErrorMessage] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [password, setPassword] = useState("");

	const history = useLocation();

	const onLoginCLicked = () => {
		alert("Login is not implemented yet");
	};

	return (
		<>
			<Pagelayout>
				<Card>
					<h1>Login</h1>
					{errorMessage && <div className='fail'>{errorMessage}</div>}
					<Input
						placeholder='someone@gmail.com'
						value={emailValue}
						onChange={(e) => setEmailValue(e.target.value)}
					/>
					<Input
						placeholder='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<FormButton
						disabled={!emailValue || !password}
						onClick={onLoginCLicked}
					>
						Login
					</FormButton>
					<FormButton onClick={() => history.push("/forgot-password")}>
						Forgot your password?
					</FormButton>
					<FormButton onClick={() => history.push("/signup")}>
						Don't have an account? Sign Up
					</FormButton>
				</Card>
			</Pagelayout>
		</>
	);
}

export default Login;
