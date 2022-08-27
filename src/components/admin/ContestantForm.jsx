import React from "react";
import styled from "styled-components";

const ContestantForm = ({ user }) => {
	return (
		<Container>
			{user && <Image src={user.imageUrl} width="100" height="100" />}
			<FormGroup>
				<InputContainer>
					<Label>First Name</Label>
					<Input
						type="text"
						placeholder="First Name"
						value={user ? user.firstName : ""}
						required
					/>
				</InputContainer>
				<InputContainer>
					<Label>Last Name</Label>
					<Input
						type="text"
						placeholder="Last Name"
						value={user ? user.lastName : ""}
						required
					/>
				</InputContainer>
			</FormGroup>
			<FormGroup>
				<InputContainer>
					<Label>Age</Label>
					<Input
						type="text"
						placeholder="Age"
						value={user ? user.age : ""}
						required
					/>
				</InputContainer>
				<InputContainer>
					<Label>Photo</Label>
					<Input type="file" required />
				</InputContainer>
			</FormGroup>
			<InputContainer>
				<Button>{user ? "Update" : "Submit"}</Button>
			</InputContainer>
		</Container>
	);
};

const Container = styled.div`
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
