import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";

import DashboardIcon from "@mui/icons-material/Dashboard";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GroupIcon from "@mui/icons-material/Group";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Sidebar = () => {
	return (
		<Container>
			<Greeting>Hello, Admin 👋</Greeting>
			<Title>Menu</Title>
			<Menu>
				<Links>
					<Link className="sidebar-link" to="/dashboard">
						<DashboardIcon style={{ opacity: 0.8 }} />
						Dashboard
					</Link>
					<Link className="sidebar-link" to="/events">
						<EventAvailableIcon style={{ opacity: 0.8 }} />
						Events
					</Link>
					<Link className="sidebar-link" to="/participants">
						<GroupIcon style={{ opacity: 0.8 }} />
						Participants
					</Link>
				</Links>
				<Button>
					Logout <LogoutIcon />
				</Button>
			</Menu>
		</Container>
	);
};

const Container = styled.div`
	flex: 0.5;
	padding: 2rem;
	height: 100vh;
	background-color: whitesmoke;
	position: fixed;
	left: 0;
	min-width: 15vw;
`;

const Greeting = styled.h3`
	font-size: 1.1rem;
	margin-bottom: 2rem;
`;

const Title = styled.h1`
	font-size: 1.3rem;
	margin-bottom: 1rem;
`;

const Menu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90%;
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
`;

const Button = styled.button`
	border: none;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	width: fit-content;
	margin-top: 0.5rem;
	padding: 0.8rem 2rem;
	font-weight: 500;
	font-size: 1rem;
	border-radius: 2rem;
	color: var(--white);
	background-color: var(--danger);
	transition: all 0.5s ease;

	&:hover {
		opacity: 0.8;
	}
`;

export default Sidebar;
