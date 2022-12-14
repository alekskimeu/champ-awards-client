import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

import image from "../../assets/user.jpg";
import ConfirmDialog from "../ConfirmDialog";
import { api } from "../../utils/api";
import ContestantForm from "./ContestantForm";
import Modal from "./Modal";

const Participant = ({ user }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
	};

	const showModal = () => {
		setShow(true);
	};

	return (
		<>
			<Container>
				<Header>
					<Image src={user.imageUrl} width="80" height="80" />
					<Content>
						<Name>
							{user.firstName} {user.lastName}
						</Name>
						<Age>{user.age} yrs</Age>
						<Gender>{user.gender} </Gender>
						<Action>
							<Button>
								<EditIcon onClick={showModal} />
							</Button>
							<Button>
								<DeleteIcon />
							</Button>
						</Action>
					</Content>
				</Header>
			</Container>

			<Modal show={show} handleClose={handleClose} title="Update Contestant">
				{<ContestantForm user={user} />}
			</Modal>
		</>
	);
};

const Container = styled.div`
	border: 1px solid rgba(231, 231, 231, 0.2);
	background-color: #161616;
	border-radius: 0.3rem;
	padding: 1.2rem;
	color: var(--white);
	margin-bottom: 1.5rem;
`;

const Header = styled.div`
	display: flex;
	gap: 1.5rem;
`;

const Image = styled.img`
	border-radius: 50%;
	border: 2px solid var(--white);
	padding: 0.1rem;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
`;

const Name = styled.h1`
	font-size: 1.3rem;
	font-weight: 700;
`;

const Age = styled.p`
	opacity: 0.6;
	font-weight: 600;
	font-size: 1.05rem;
`;

const Gender = styled.p`
	opacity: 0.6;
	font-weight: 600;
	font-size: 1rem;
`;

const Action = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	border: none;
	gap: 0.5rem;
	cursor: pointer;
	width: fit-content;
	margin-top: 0.5rem;
	padding: 0.4rem 0.6rem;
	font-weight: 500;
	font-size: 0.8rem;
	border-radius: 0.3rem;
	color: var(--white);
	transition: all 0.5s ease;

	&:first-child {
		background-color: var(--primary);
	}

	&:last-child {
		background-color: var(--danger);
	}

	&:hover {
		opacity: 0.9;
	}
`;

export default Participant;
