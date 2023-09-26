import React, { useEffect, useState } from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	const navigateToNewProject = () => {
		navigate("/newproject");
	};

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" sx={{ flexGrow: 1 }}>
						Job Traveler
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer anchor="left" open={open} onClose={toggleDrawer}>
				<List>
					<ListItem button>
						<ListItemIcon>
							<AttachMoneyIcon />
						</ListItemIcon>
						<ListItemText primary="Open Sales" />
					</ListItem>
					<ListItem button onClick={navigateToNewProject}>
						<ListItemIcon>
							<CreateNewFolderIcon />
						</ListItemIcon>
						<ListItemText primary="New Project" />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<PointOfSaleIcon />
						</ListItemIcon>
						<ListItemText primary="Ready to Invoice" />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<RequestQuoteIcon />
						</ListItemIcon>
						<ListItemText primary="Closed Sales" />
					</ListItem>
				</List>
			</Drawer>
		</>
	);
};

export default Navbar;
