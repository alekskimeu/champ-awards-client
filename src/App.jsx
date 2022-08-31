import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components";

import Polls from "./pages/Polls";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Participants from "./pages/Participants";
import Categories from "./pages/Categories";

const App = () => {
	return (
		<Container>
			<Router>
				<Routes>
					<Route path="/" exact element={<Polls />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/login" element={<Login />} />
					<Route path="/events" element={<Events />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/participants" element={<Participants />} />
					<Route path="/events/:id" element={<Event />} />
				</Routes>
			</Router>
		</Container>
	);
};

const Container = styled.div`
	min-height: 100vh;
`;

export default App;
