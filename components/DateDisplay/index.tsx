import { DateTime } from "luxon";
import React from "react";

import { StyledDateDisplay } from "./styles";

const DateDisplay: React.FC<{ date: DateTime }> = ({ date }) => (
	<StyledDateDisplay>
		{date.toLocaleString(DateTime.DATETIME_HUGE)}
	</StyledDateDisplay>
);

export default DateDisplay;
