/* path to file: ./components/app
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, {Component} from 'react';

// component
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

// style
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		// Check if correct (step 31)
		/* Inside of the App component, set a hard-coded initial value for this.state.searchResults.
			 Inside of the App constructor, set this.state to an object with a property called searchResults set to an array of objects,
			 each containing name, artist, and album properties. */
		this.state = {
			searchResults: ['name', 'artist', 'album']
		}
	}

	render() {
		return (
			<div>
				<h1>Ja<span className="highlight">mmm</span>ing</h1>
				<div className="App">
					<SearchBar />
					<div className="App-playlist">
						<SearchResults searchResults={ this.state.searchResults } />
						<Playlist />
					</div>
				</div>
			</div>
		);
	}
}

export default App;