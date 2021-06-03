import axios from "axios";
import { DateTime } from "luxon";
import React from "react";

import { LinksWrapper } from "./styles";

export default class Links extends React.Component<
	{ date: DateTime },
	{ generateUrl: boolean }
> {
	state = {
		generateUrl: false,
	};

	async generateUrl() {
		// redundancy
		if (this.state.generateUrl) {
			return;
		}
		this.setState({ generateUrl: true });
		// make request
		let data;
		try {
			data = await axios.post("/api/share", {
				date: this.props.date.toMillis(),
			});
		} catch (err) {
			console.error(err);
			this.setState({ generateUrl: false });
		}
	}

	render() {
		return (
			<LinksWrapper>
				<a
					onClick={() => this.generateUrl()}
					className={this.state.generateUrl ? "generate" : undefined}
					aria-disabled={this.state.generateUrl}
				>
					{this.state.generateUrl ? "generating..." : "share this time"}
				</a>
				<a>twitter</a>
				<a>report</a>
			</LinksWrapper>
		);
	}
}
