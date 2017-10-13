/* path to file: ./components/trackList
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

// component
import Track from '../Track/Track';

// style
import './TrackList.css'

class TrackList extends Component {
	render() {
		return(
			<div className="TrackList">
				{ /* You will add a map method that renders a set of Track components */ }
				<Track />
			</div>
		);
	}
}

export default TrackList;