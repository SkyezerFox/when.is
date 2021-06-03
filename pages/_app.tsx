import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
	width: auto;
	height: auto;

	background-color: #161616;
	color: white;
	font-family: 'Source Code Pro', monospace;
}

body {
    padding: 2rem;
    display: flex;
	justify-content: center;
}
`;

const Container = styled.div`
	max-width: 800px;
`;

const app: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
				rel="stylesheet"
			/>
		</Head>

		<GlobalStyle />
		<Container>
			<Component {...pageProps} />
		</Container>
	</>
);

export default app;
