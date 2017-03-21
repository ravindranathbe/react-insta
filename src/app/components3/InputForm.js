import React from "react";

export const InputForm = (props) => {
	return(
		<div>
			<div className="row">
				<hr/>
				<p>Instagram ID: <input type="text" name="instaID" /></p>
				<button 
					className="btn btn-primary" 
					onClick={props.getInstaImages}
				>Get Instagram Images</button>
			</div>
		</div>
	);
}