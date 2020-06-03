import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar(props) {
	const [startDate, setStartDate] = useState(new Date());

	useEffect(() => {
		props.handleDate(startDate);
	}, [startDate]);

	return (
		<DatePicker
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			inline
		/>
	);
}

export default Calendar;