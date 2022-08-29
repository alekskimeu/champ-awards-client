import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "../common/FormInput";

const ContestantForm = ({ user }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState(null);
	const [photo, setPhoto] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(firstName, lastName, age);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				{user && <Image src={user.imageUrl} width="100" height="100" />}
				<FormGroup>
					<FormInput
						type="text"
						label="First Name"
						defaultValue={user ? user.firstName : ""}
						required
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<FormInput
						type="text"
						label="Last Name"
						defaultValue={user ? user.lastName : ""}
						required
						onChange={(e) => setLastName(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<FormInput
						type="number"
						label="Age"
						defaultValue={user ? user.age : ""}
						required
						onChange={(e) => setAge(e.target.value)}
					/>
					<FormInput type="file" label="Photo" required />
				</FormGroup>
				<InputContainer>
					<Button>{user ? "Update" : "Submit"}</Button>
				</InputContainer>
			</Form>
		</Container>
	);
};

const Container = styled.div`
	/* display: flex;
	flex-direction: column;
	gap: 2rem; */
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const FormGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 3rem;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Label = styled.div`
	font-weight: 600;
	font-size: 1.1rem;
`;

const Input = styled.input`
	padding: 0.7rem 0.8rem;
	border: 1px solid rgba(226, 226, 226);
	outline: none;
	font-size: 1rem;
	width: 100%;
	border-radius: 0.3rem;

	&:focus {
		border-color: var(--primary);
	}

	&[type="file"] {
		padding: 0.5rem 0.8rem;
	}
`;

const Image = styled.img`
	border-radius: 50%;
	object-fit: cover;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	border: none;
	cursor: pointer;
	width: fit-content;
	margin-top: 0.5rem;
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

export default ContestantForm;
