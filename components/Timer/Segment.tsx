import React from "react";

import { ClockSegment, TimeEl } from "./styles";

const pluralize = (string: string, val: number) =>
	val == 1 ? string + "s" : string;

const pad = (val: number, sf: number) => {
	const str = val.toString();

	if (str.length >= sf) {
		return val.toString();
	}

	return "0".repeat(sf - str.length) + val.toString();
};

const Segment: React.FC<{ name: string; value?: number }> = (props) => {
	const value = props.value || 0;

	return (
		<ClockSegment>
			<TimeEl>{pad(Math.floor(value), 4)}</TimeEl>
			{pluralize(props.name, value)}
		</ClockSegment>
	);
};

export default Segment;
