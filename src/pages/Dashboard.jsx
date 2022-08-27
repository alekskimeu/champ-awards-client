import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/admin/Layout";
import Participant from "../components/admin/Participant";
import Event from "../components/admin/Event";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { stats } from "../utils/stats";
import { api } from "../utils/api";

const Dashboard = () => {
	const [contestants, setContestants] = useState([]);
	const [events, setEvents] = useState([]);

	const [search, setSearch] = useState("");

	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
	};

	const showModal = () => {
		setShow(true);
	};

	useEffect(() => {
		const fetchContestants = async () => {
			const response = await api.get("/contestants");
			setContestants(response.data);
		};
		const fetchEvents = async () => {
			const response = await api.get("/events");
			setEvents(response.data);
		};
		fetchContestants();
		fetchEvents();
	}, [contestants, events]);

	return (
		<Layout>
			<Content>
				<CardsHeader>
					<Title>Hello Admin 👋</Title>
					<Search>
						<SearchRoundedIcon />
						<Input
							type="search"
							placeholder="Search Data"
							onChange={(e) => setSearch(e.target.value)}
						/>
					</Search>
				</CardsHeader>
				<EventsContainer>
					<SectionHeader>
						<Title>Top Events</Title>
						<Link to="/events" className="header-nav">
							All Events
						</Link>
					</SectionHeader>
					<Cards>
						{events
							.filter((event) => event.name.includes(search))
							.slice(0, 3)
							.map((event) => (
								<Event event={event} key={event._id} />
							))}
					</Cards>
				</EventsContainer>

				<ParticipantsContainer>
					<SectionHeader>
						<Title>Top Participants</Title>
						<Link to="/participants" className="header-nav">
							All Participants
						</Link>
					</SectionHeader>
					<Cards>
						{contestants
							.filter(
								(user) =>
									user.firstName.includes(search) ||
									user.lastName.includes(search)
							)
							.slice(0, 3)
							.map((user) => (
								<Participant user={user} key={user._id} />
							))}
					</Cards>
				</ParticipantsContainer>
			</Content>
		</Layout>
	);
};

const Content = styled.div`
	padding: 1rem 3rem;
	top: 12rem;
	width: 100%;
`;

const EventsContainer = styled.div`
	margin-bottom: 2rem;
`;

const ParticipantsContainer = styled.div``;

const SectionHeader = styled.div`
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
`;
const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;

	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

const CardsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	margin-bottom: 2.5rem;
`;

const Title = styled.h2`
	font-size: 1.2rem;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	border: none;
	cursor: pointer;
	width: fit-content;
	margin-top: 0.5rem;
	padding: 0.9rem;
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

const Search = styled.div`
	display: flex;
	align-items: center;
	background-color: #e9e9e9;
	width: 20vw;
	border-radius: 0.5rem;
	padding-left: 0.8rem;
`;

const Input = styled.input`
	background-color: #e9e9e9;
	width: 100%;
	border: none;
	padding: 0.9rem;
	outline: none;
	border-radius: 0.5rem;
	font-size: 1rem;
`;

export default Dashboard;
