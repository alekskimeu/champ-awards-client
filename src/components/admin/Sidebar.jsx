import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";

import DashboardIcon from "@mui/icons-material/Dashboard";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GroupIcon from "@mui/icons-material/Group";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CategoryIcon from '@mui/icons-material/Category';

const Sidebar = () => {
	return (
		<Container>
			<Logo>Coach Michael</Logo>
			<Title>Menu</Title>
			<Menu>
				<Links>
					<NavLink className="sidebar-link" to="/dashboard">
						<DashboardIcon style={{ opacity: 0.8 }} />
						Dashboard
					</NavLink>
					<NavLink className="sidebar-link" to="/events">
						<EventAvailableIcon style={{ opacity: 0.8 }} />
						Events
					</NavLink>
					<NavLink className="sidebar-link" to="/categories">
						<CategoryIcon style={{ opacity: 0.8 }} />
						Categories
					</NavLink>
					<NavLink className="sidebar-link" to="/participants">
						<GroupIcon style={{ opacity: 0.8 }} />
						Participants
					</NavLink>
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
	padding: 1.5rem 2rem 3rem 2rem;
	height: 100vh;
	background-color: var(--black);
	position: fixed;
	left: 0;
	min-width: 15vw;
`;

const Logo = styled.h1`
	font-size: 1.6rem;
	margin-bottom: 2rem;
`;

const Title = styled.h1`
	font-size: 1.3rem;
	margin-bottom: 1rem;
	color: var(--white);
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
