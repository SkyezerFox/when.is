import styled from "styled-components";

export const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	// align to center
	align-items: center;

	@media only screen and (min-width: 600px) {
		font-size: 40px;
	}
`;

export const InputField = styled.input<{ hasText: boolean }>`
	padding: 0 0.5rem;
	width: auto;
	min-width: 400px;

	@media only screen and (min-width: 600px) {
		font-size: 40px;
	}

	font-family: "Raleway";
	color: ${({ hasText }) => (hasText ? "#ddd" : "black")};
	background: ${({ hasText }) => (hasText ? "#444" : "none")};
	border: none;
	transition: all 0.1s;
	outline: none;

	&::placeholder {
		color: #ddd;
	}

	&:hover {
		background: #222;
	}

	&:focus {
		color: black;
		background-color: white;
		&::placeholder {
			display: none;
		}
	}
`;

export const Splash = styled.span`
	user-select: none;
	color: #666;
	padding-right: 1rem;
`;
