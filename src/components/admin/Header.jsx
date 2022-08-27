import React from "react";
import styled from 'styled-components'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Header = () => {
	return (
		<Container>
			<Search>
				<SearchRoundedIcon />
				<Input type="search" placeholder="Search Data" />
			</Search>
		</Container>
	);
};

const Container = styled.div`
	padding: 1rem 3rem;
	height: 5rem;
	background-color: whitesmoke;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;
	`

const Search = styled.div`
	display: flex;
	align-items: center;
	background-color: var(--white);
	width: 30vw;
	border-radius: 0.5rem;
	padding-left: .8rem;
`

const Input = styled.input`
	width: 100%;
	border: none;
	padding: 0.8rem;
	outline: none;
	border-radius: 0.5rem;
	font-size: 1rem;
`

export default Header;
