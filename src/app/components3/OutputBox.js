import React from "react";

export const OutputBox = (props) => {
	return(
		<div>
			<div className="row">
				<h3>Instagram images</h3>
			</div>
			<div className="row">
				<p>{props.instaImages}</p>
			</div>
		</div>
	);
}