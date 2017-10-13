/* path to file: ./components/track
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

// style
import './Track.css';

class Track extends Component {
	// Check if correct (step 27)
	renderAction(isRemoval) {
		return isRemoval = true ? '+' : '-';
	}

	render() {
		return(
			<div className="Track">
				<div className="Track-information">
					<h3>{ /* track name will go here */ }</h3>
					<p>{ /* track artist will go here */ } | { /* track album will go here */ }</p>
				</div>
				
				<a className="Track-action">{ this.renderAction() }</a>
			</div>
		);
	}
}

export default Track;