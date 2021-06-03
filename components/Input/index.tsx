import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import React, { ChangeEvent, FormEvent } from "react";

import { InputContainer, InputField, Splash } from "./styles";

class InputComponent extends React.Component<
	WithRouterProps & { initialValue?: string; autoFocus?: boolean },
	{ query: string }
> {
	state = {
		query: this.props.initialValue || "",
	};

	// reference to input
	inputRef = React.createRef<HTMLInputElement>();

	componentDidMount() {
		window.addEventListener("keydown", (ev) => {
			if (ev.code !== "Escape") {
				this.inputRef.current?.focus();
			} else {
				this.inputRef.current?.blur();
			}
		});

		window.addEventListener("load", () => {
			this.inputRef.current?.focus();
		});
	}

	updateQuery(e: ChangeEvent<HTMLInputElement>) {
		this.setState({
			query: e.target.value,
		});
	}

	submitQuery(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		this.props.router.push(
			`/search?query=${encodeURIComponent(this.state.query)}`
		);
	}

	render() {
		return (
			<InputContainer>
				<Splash>when.is</Splash>
				<form onSubmit={(e) => this.submitQuery(e)}>
					<InputField
						ref={this.inputRef}
						autoFocus={this.props.autoFocus}
						value={this.state.query}
						hasText={this.state.query != ""}
						type="text"
						onChange={(e) => this.updateQuery(e)}
						placeholder="Independance Day"
					></InputField>
				</form>
			</InputContainer>
		);
	}
}

export default withRouter(InputComponent);
