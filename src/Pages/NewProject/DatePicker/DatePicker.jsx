import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function BasicDatePicker(props) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DatePicker"]}>
				<DatePicker
					label={props.label}
					value={dayjs(props.value)}
					inputFormat="MM/DD/YYYY"
					onChange={(date) =>
						props.onChange(date.format("MM/DD/YYYY"), props.name)
					}
					sx={{ width: "100%" }}
					slotProps={{ textField: { variant: "outlined" } }}
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
}
