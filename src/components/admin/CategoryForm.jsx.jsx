import React, { useState } from "react";
import styled from "styled-components";
import { api } from "../../utils/api";
import FormInput from "../common/FormInput";

const CategoryForm = ({ category, setShow }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	// Create new category
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await api.post("/categories", { name, description });
			setShow(false);
		} catch (error) {
			console.log(error);
		}
	};

	// Update category
	const handleUpdate = async (e) => {
		e.preventDefault();
		try {
			const response = await api.put(`/categories/${category._id}`, {
				name,
				description,
			});
			setShow(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Form onSubmit={category ? handleUpdate : handleSubmit}>
				<FormInput
					type="text"
					label="Name"
					name="name"
					onChange={(e) => setName(e.target.value)}
					value={category ? category.name : name}
					required
				/>
				<InputContainer>
					<Label>
						Description<Required>*</Required>
					</Label>
					<Textarea
						placeholder="Description"
						name="description"
						rows="5"
						onChange={(e) => setDescription(e.target.value)}
						defaultValue={category ? category.description : description}
						required
					/>
				</InputContainer>
				<InputContainer>
					<Button>{category ? "Update" : "Submit"}</Button>
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

const Required = styled.label`
	color: #ca0101;
	margin-left: 0.2rem;
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

const Select = styled.select`
	padding: 0.8rem;
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

export default CategoryForm;
