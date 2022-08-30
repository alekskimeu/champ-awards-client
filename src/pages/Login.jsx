import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "../components/common/FormInput";

import LoginIcon from "@mui/icons-material/Login";
import logo from "../assets/code.png";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		e.preventDefault();
	};

	return (
		<Container>
			<Form onSubmit={handleLogin}>
				<Header>
					<Logo src={logo} width="60" />
					<Greeting>Welcome, Admin 👋</Greeting>
				</Header>
				<FormInput
					type="email"
					label="Email"
					value=""
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<FormInput
					type="password"
					label="Password"
					value=""
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<InputContainer>
					<Button>
						Login
						<LoginIcon />
					</Button>
				</InputContainer>
			</Form>
		</Container>
	);
};

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 600px;
	margin: auto;
`;

const Header = styled.div`
	text-align: center;
	width: fit-content;
	margin: auto;
`;

const Logo = styled.img`
	width: 60px;
`;

const Greeting = styled.h1`
	color: var(--primary);
	font-weight: 600;
	font-size: 1.2rem;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
	padding: 3rem;
	border: 1px solid rgb(31, 118, 210, 0.8);
	border-radius: 0.3rem;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	border: none;
	cursor: pointer;
	width: fit-content;
	padding: 0.8rem 1.2rem;
	font-weight: 500;
	font-size: 1rem;
	border-radius: 0.3rem;
	color: var(--white);
	background-color: var(--primary);
	transition: all 0.5s ease;

	&:hover {
		opacity: calc() 0.9;
	}
`;

export default Login;
