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
	/* Create a method called renderAction that displays a - anchor tag if the isRemoval property is true, and a + anchor tag if the isRemoval property is false.
		 Set the class name to Track-action. */
	renderAction(isRemoval) {
		return isRemoval = true ? '-' : '+';
	}

	render() {
		return(
			<div className="Track">
				<div className="Track-information">
					<h3>track { /* track name will go here */ }</h3>
					<p>artist { /* track artist will go here */ } | album { /* track album will go here */ }</p>
				</div>

				<a className="Track-action">{ this.renderAction() }</a>
			</div>
		);
	}
}

export default Track;