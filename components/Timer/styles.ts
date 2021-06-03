import styled from "styled-components";

export const ClockSegment = styled.span`
	font-family: "Raleway", sans-serif;
	font-size: 30px;
	color: #444;
	margin-right: 1rem;
`;

export const TimeEl = styled(ClockSegment)`
	color: #666;
	font-size: 40px;
	font-family: "Source Code Pro", monospace;
`;

export const SegmentWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
