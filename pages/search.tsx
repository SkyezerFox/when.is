import { DateTime } from "luxon";
import { useRouter } from "next/router";

import DateDisplay from "../components/DateDisplay";
import Input from "../components/Input";
import Links from "../components/Links";
import Timer from "../components/Timer";

const search: React.FC<{}> = () => {
	const router = useRouter();
	const date = DateTime.now().plus({ months: Math.random() });

	return (
		<>
			<Input initialValue={router.query["query"] as string} />
			<DateDisplay date={date} />
			<Timer date={date}></Timer>
			<Links date={date} />
		</>
	);
};

export default search;
