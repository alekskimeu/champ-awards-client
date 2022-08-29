import React, { useState } from "react";
import styled from "styled-components";

import FormInput from "../common/FormInput";

const EventForm = ({ event }) => {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`Name: ${name}, Date: ${date} Description": ${description}`);
	};

	return (
		<Container>
			{event && (
				<ImageContainer>
					<Image src={event.imageUrl} width="120" height="120" />
				</ImageContainer>
			)}
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<FormInput
						type="text"
						label="Event Name"
						value={event ? event.name : ""}
						onChange={(e) => setName(e.target.value)}
					/>
					<FormInput
						type="date"
						label="Date"
						value={event ? event.date : ""}
						onChange={(e) => setDate(e.target.value)}
						required
					/>
				</FormGroup>
				<InputContainer>
					<Label>Description</Label>
					<Textarea
						placeholder="Description"
						name="description"
						rows="5"
						onChange={(e) => setDescription(e.target.value)}
						defaultValue={event ? event.description : ""}
					/>
				</InputContainer>
				<FormGroup>
					<FormInput type="file" label="Image" />
				</FormGroup>
				<InputContainer>
					<Button>{event ? "Update" : "Submit"}</Button>
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

const Label = styled.label`
	font-weight: 600;
	font-size: 1.1rem;
`;

const Textarea = styled.textarea`
	padding: 0.7rem 0.8rem;
	border: 1px solid rgba(226, 226, 226);
	outline: none;
	font-size: 1rem;
	width: 100%;
	border-radius: 0.3rem;

	&:focus {
		border-color: var(--primary);
	}
`;

const ImageContainer = styled.div`
	width: 120px;
	height: 120px;
	border: 2px solid #5f5f5f;
	border-radius: 50%;
`;

const Image = styled.img`
	border-radius: 50%;
	object-fit: cover;
	width: 100%;
	height: 100%;
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

export default EventForm;
