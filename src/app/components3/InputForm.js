import React from "react";

export class InputForm extends React.Component {
	constructor() {
		super();
		this.state = {
			instaID: ''
		};
	}
	
	handleInstaIdFn = (ev) => {
		this.props.handleInstaId(ev.target.value);
		this.setState({
			instaID: ev.target.value
		});
	};

	handleClickFn = (ev) => {
		this.props.getInstaImages(this.state.instaID);
	};

	render() {
		return(
			<div>
				<div className="row">
					<hr/>
					<p>Instagram ID: 
						<input type="text" name="instaID" onBlur={this.handleInstaIdFn}	/>
					</p>
					<button 
						className="btn btn-primary" 
						onClick={this.handleClickFn}
					>Get Instagram Images</button>
				</div>
			</div>
		);
	};
}