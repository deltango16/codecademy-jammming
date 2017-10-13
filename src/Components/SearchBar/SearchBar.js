/* path to file: ./components/searchbar
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

// style
import './SearchBar.css';

class SearchBar extends Component {
	render() {
		return(
			<div className="SearchBar">
				<input placeholder="Enter A Song, Album, or Artist" />
				<a>SEARCH</a>
			</div>
		);
	}
}

export default SearchBar;