import React from "react";
import {connect} from "react-redux";

import { OutputBox } from "../components3/OutputBox";
import { InputForm } from "../components3/InputForm";
import { setInstaImages, handleInstaId } from "../actions3/instaActions";

class App extends React.Component {
	render() {
		return(
			<div className="row col-md-4 col-xs-12">
				<InputForm 
					instaId={this.props.insta.instaId}
					handleInstaId={(txt) => this.props.handleInstaId(txt)} 
					getInstaImages={(txt) => this.props.setInstaImages(txt)} 
					/>
				<OutputBox instaImages={this.props.insta.result} instaId={this.props.insta.instaId} />
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
		setInstaImages: (txt) => {
			dispatch(setInstaImages(txt));
		},
		handleInstaId: (txt) => {
			dispatch(handleInstaId(txt));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);