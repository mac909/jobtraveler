import "./App.css";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Authenticator } from "@aws-amplify/ui-react";

import { Typography } from "@mui/material";

import Home from "./Pages/Homepage/Home";
import Navbar from "./common/Navbar/Navbar";
import NewProject from "./Pages/NewProject/NewProject";

Amplify.configure(config);

function App() {
	return (
		<Router>
			<Authenticator loginMechanisms={["email"]}>
				{({ signOut, user }) => (
					<Typography
						variant="body1"
						component="div"
						align="center"
						gutterBottom
					>
						<Navbar signOut={signOut} user={user} />
						<Routes>
							<Route path="*" element={<Home />} />
							<Route path="/" element={<Home />} />
							<Route
								path="/newproject"
								element={<NewProject />}
							/>
						</Routes>
					</Typography>
				)}
			</Authenticator>
		</Router>
	);
}

export default App;
