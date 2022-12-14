import React, { useState } from "react";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

import image from "../../assets/user.jpg";
import ConfirmDialog from "../ConfirmDialog";
import { api } from "../../utils/api";
import ContestantForm from "./ContestantForm";
import Modal from "./Modal";
import EventForm from "./EventForm";

const Event = ({ event }) => {
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
					<Image src={event.imageUrl} width="80" height="80" />
					<Content>
						<Name>{event.name}</Name>
						<EventDate>Fri Jan 26 2023</EventDate>
						<Participants>
							{event.participants.length} Participants
						</Participants>
						<Action>
							<Link to={`/events/${event._id}`} className="btn-more">Details</Link>
							<Cta>
								<Button>
									<EditIcon onClick={showModal} />
								</Button>
								<Button>
									<DeleteIcon />
								</Button>
							</Cta>
						</Action>
					</Content>
				</Header>
			</Container>

			<Modal show={show} handleClose={handleClose} title="Update Event">
				{<EventForm event={event} />}
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
	flex: 1;
`;

const Name = styled.h1`
	font-size: 1.3rem;
	font-weight: 700;
`;

const EventDate = styled.h3`
	font-size: 1.1rem;
	font-weight: 500;
	margin-top: 0.2rem;
`;

const Participants = styled.p`
	opacity: 0.6;
	font-weight: 600;
	font-size: 1.05rem;
`;

const Action = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	width: 100%;
	margin-top: 1rem;
`;

const Cta = styled.div`
	display: flex;
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


export default Event;
