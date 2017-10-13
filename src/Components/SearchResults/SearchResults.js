/* path to file: ./components/searchresults
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

// component
import TrackList from '../TrackList/TrackList';

// style
import './SearchResults.css';

class SearchResults extends Component {
	render() {
		return(
			<div className="SearchResults">
				<h2>Results</h2>
				
				<TrackList />
			</div>
		);
	}
}

export default SearchResults;