import styled from "styled-components";

import Input from "../components/Input";

const Margin = styled.div`
	margin-top: 16rem;
`;

export default function WhenIs() {
	return (
		<Margin>
			<Input autoFocus={true} />
		</Margin>
	);
}
