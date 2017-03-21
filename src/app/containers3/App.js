import React from "react";
import {connect} from "react-redux";

import { OutputBox } from "../components3/OutputBox";
import { InputForm } from "../components3/InputForm";
import { setInstaImages } from "../actions3/instaActions";

class App extends React.Component {
	render() {
		return(
			<div className="row col-md-4 col-xs-12">
				<InputForm getInstaImages={() => this.props.setInstaImages('Ram')} />
				<OutputBox instaImages={this.props.insta.result} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		insta: state.instaReducer
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setInstaImages: (name) => {
			dispatch(setInstaImages(name));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);