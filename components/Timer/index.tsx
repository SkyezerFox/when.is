import { DateTime } from "luxon";
import React from "react";

import Segment from "./Segment";
import { SegmentWrapper } from "./styles";

const computeTime = (date: DateTime) =>
	DateTime.now()
		.until(date)
		.toDuration(
			[
				"years",
				"months",
				"days",
				"hours",
				"minutes",
				"seconds",
				"milliseconds",
			],
			{
				conversionAccuracy: "casual",
			}
		)
		.normalize()
		.toObject();

const Timer: React.FC<{ date: DateTime }> = ({ date }) => {
	const [value, setValue] = React.useState(computeTime(date));

	const requestRef = React.useRef<number>();
	const previousTimeRef = React.useRef<number>();

	const animate = (time: number) => {
		if (previousTimeRef.current != undefined) {
			setValue(computeTime(date));
		}
		previousTimeRef.current = time;
		requestRef.current = requestAnimationFrame(animate);
	};

	React.useEffect(() => {
		requestRef.current = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(requestRef.current);
	}, []);

	return (
		<SegmentWrapper>
			<Segment name="years" value={value.years} />
			<Segment name="months" value={value.months} />
			<Segment name="days" value={value.days} />
			<Segment name="hours" value={value.hours} />
			<Segment name="minutes" value={value.minutes} />
			<Segment name="seconds" value={value.seconds} />
			<Segment name="milliseconds" value={value.milliseconds} />
		</SegmentWrapper>
	);
};

export default Timer;
