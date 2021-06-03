import styled from "styled-components";

export const LinksWrapper = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;

	a {
		transition: all 50ms;
		margin-right: 1rem;
		cursor: pointer;
		color: #ccc;
	}

	a:hover {
		color: white;
	}

	a:active {
		color: #aaa;
	}

	a.generate {
		color: #444;
		cursor: default;
	}
`;
