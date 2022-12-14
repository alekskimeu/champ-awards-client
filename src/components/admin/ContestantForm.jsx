import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "../common/FormInput";

const ContestantForm = ({ user }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [gender, setGender] = useState("");
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
						value={user ? user.firstName : ""}
						required
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<FormInput
						type="text"
						label="Last Name"
						value={user ? user.lastName : ""}
						required
						onChange={(e) => setLastName(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<FormInput
						type="number"
						label="Age"
						value={user ? user.age : ""}
						required
						onChange={(e) => setAge(e.target.value)}
					/>
					<InputContainer>
						<Label>
							Event
							<Required>*</Required>
						</Label>
						<RadioContainer>
							<Radio
								type="radio"
								value="Male"
								name="gender"
								onChange={(e) => setGender(e.target.value)}
								checked={user && user.gender === "Male"}
							/>{" "}
							Male
							<Radio
								type="radio"
								value="Female"
								name="gender"
								onChange={(e) => setGender(e.target.value)}
								checked={user && user.gender === "Female"}
							/>{" "}
							Female
						</RadioContainer>
					</InputContainer>
				</FormGroup>
				<FormGroup>
					<InputContainer>
						<Label>
							Event
							<Required>*</Required>
						</Label>

						<Select
							value={user ? user.event : ""}
							required
							onChange={(e) => setAge(e.target.value)}
						>
							<Option>Event</Option>
						</Select>
					</InputContainer>
					<InputContainer>
						<Label>
							Category
							<Required>*</Required>
						</Label>

						<Select
							value={user ? user.category : ""}
							required
							onChange={(e) => setAge(e.target.value)}
						>
							<Option>Category</Option>
						</Select>
					</InputContainer>
				</FormGroup>
				<FormGroup>
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
	align-items: center;
	gap: 3rem;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Label = styled.label`
	font-weight: 600;
	font-size: 1.1rem;
`;

const Required = styled.label`
	color: #ca0101;
	margin-left: 0.2rem;
`;

const RadioContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const Radio = styled.input`
	/* color: #ca0101;
	margin-left: 0.2rem; */
`;

const Select = styled.select`
	padding: 0.6rem;
	border: 1px solid rgba(231, 231, 231, 0.1);
	outline: none;
	font-size: 1rem;
	width: 100%;
	border-radius: 0.3rem;
	cursor: pointer;

	&:focus {
		border-color: var(--primary);
	}
`;

const Option = styled.option``;

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
	padding: 0.65rem 1rem;
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
