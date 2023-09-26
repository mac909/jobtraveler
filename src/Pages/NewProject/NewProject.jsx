import React, { useState } from "react";
import {
	Typography,
	Grid,
	TextField,
	Checkbox,
	FormControl,
	FormControlLabel,
	Box,
} from "@mui/material";
import DatePicker from "./DatePicker/DatePicker";
import dayjs from "dayjs";

const NewProject = () => {
	const initialState = {
		customer: "",
		partNumber_Description: "",
		PODate: dayjs(new Date()).format("MM/DD/YYYY"),
		poDueDate: "",
		quantity: 0,
		priceperunit: 0,
		OPS_Saw: false,
		OPS_Laser: false,
		OPS_Bend: false,
		OPS_Mach: false,
		OPS_Weld: false,
		OPS_Pack: false,
		notes: "",
	};

	const [formData, setFormData] = useState(initialState);
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateChange = (date, name) => {
		setFormData({
			...formData,
			[name]: date,
		});
	};

	const formatCurrency = (value) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(value);
	};

	const handleOnChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		console.log(e, formData);
	};

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: checked,
		}));
	};

	return (
		<Typography
			variant="body1"
			component="div"
			align="center"
			gutterBottom
			m={2}
		>
			<Grid
				container
				spacing={2}
				sx={{
					width: "100%",
					maxWidth: "800px",
					margin: "auto",
				}}
			>
				<Grid item xs={12}>
					<TextField
						required
						id="customer"
						name="customer"
						inputMode="text"
						label="Customer"
						margin="normal"
						value={formData.customer}
						onChange={handleOnChange}
						fullWidth
					/>
				</Grid>
				<Grid container item xs={12} spacing={1}>
					<Grid item xs={12} sm={6}>
						<DatePicker
							label="PO Date"
							name="PODate"
							id="PODate"
							value={formData.PODate}
							onChange={handleDateChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DatePicker
							label="PO Due Date"
							name="poDueDate"
							id="poDueDate"
							value={formData.poDueDate}
							onChange={handleDateChange}
						/>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id="partNumber_Description"
						name="partNumber_Description"
						label="Part Number/Description"
						margin="normal"
						value={formData.partNumber_Description}
						onChange={handleOnChange}
						fullWidth
					/>
				</Grid>
				<Grid container item xs={12} spacing={1}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="quantity"
							name="quantity"
							inputMode="number"
							label="Quantity"
							margin="normal"
							value={formData.quantity}
							onChange={handleOnChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="priceperunit"
							name="priceperunit"
							inputMode="number"
							label="Price Per Unit"
							margin="normal"
							value={formData.priceperunit}
							onChange={handleOnChange}
							fullWidth
						/>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="totalPrice"
						name="totalPrice"
						inputMode="number"
						label="Total Price"
						margin="normal"
						value={formatCurrency(
							formData.quantity * formData.priceperunit
						)}
						fullWidth
					/>
				</Grid>
				<Grid container item xs={12} spacing={1}>
					<Grid item xs={12} sm={4}>
						<Box
							p={0.75}
							sx={{
								borderRadius: "5px",
								border: "1px solid lightgrey",
							}}
						>
							<h3>Operations</h3>
							<FormControl>
								<FormControlLabel
									control={<Checkbox />}
									name="OPS_Saw"
									label="Saw"
									checked={formData.OPS_Saw}
									onChange={handleCheckboxChange}
								/>
								<FormControlLabel
									control={<Checkbox />}
									name="OPS_Laser"
									label="Laser"
									checked={formData.OPS_Laser}
									onChange={handleCheckboxChange}
								/>
								<FormControlLabel
									control={<Checkbox />}
									name="OPS_Bend"
									label="Bend"
									checked={formData.OPS_Bend}
									onChange={handleCheckboxChange}
								/>
								<FormControlLabel
									control={<Checkbox />}
									name="OPS_Mach"
									label="Mach"
									checked={formData.OPS_Mach}
									onChange={handleCheckboxChange}
								/>
								<FormControlLabel
									control={<Checkbox />}
									name="OPS_Weld"
									label="Weld"
									checked={formData.OPS_Weld}
									onChange={handleCheckboxChange}
								/>
								<FormControlLabel
									control={<Checkbox />}
									name="OPS_Pack"
									label="Pack"
									checked={formData.OPS_Pack}
									onChange={handleCheckboxChange}
								/>
							</FormControl>
						</Box>
					</Grid>
					<Grid item xs={12} sm={8}>
						<TextField
							id="notes"
							name="notes"
							label="Notes"
							multiline
							rows={13}
							onChange={handleOnChange}
							fullWidth
						/>
					</Grid>
				</Grid>
			</Grid>
		</Typography>
	);
};

export default NewProject;
