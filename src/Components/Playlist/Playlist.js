/* path to file: ./components/playlist
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

// component
import TrackList from '../TrackList/TrackList';

// style
import './Playlist.css';

class Playlist extends Component {
	render() {
		return(
			<div className="Playlist">
				<input defaultValue={ 'New Playlist' } />

				<TrackList />
				
				<a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		);
	}
}

export default Playlist;