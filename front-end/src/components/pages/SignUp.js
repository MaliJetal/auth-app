import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Pagelayout, Card, Input, FormButton } from "components/common";

function SignUp() {
	const [errorMessage, setErrorMessage] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const history = useLocation();

	const onSignUpCLicked = () => {
		alert("SignUp is not implemented yet");
	};

	return (
		<>
			<Pagelayout>
				<Card>
					<h1>SignUp</h1>
					{errorMessage && <div className='fail'>{errorMessage}</div>}
					<Input
						placeholder='someone@gmail.com'
						value={emailValue}
						onChange={setEmailValue}
					/>
					<Input
						placeholder='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Input
						placeholder='confirmPassword'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<FormButton
						disabled={!emailValue || !password || password != confirmPassword}
						onClick={onSignUpCLicked}
					>
						SignUp
					</FormButton>
					<FormButton onClick={() => history.push("login")}>
						Already have an account? SignIn
					</FormButton>
				</Card>
			</Pagelayout>
		</>
	);
}

export default SignUp;
