import React, { useState } from 'react';
import '../../css/Search.css'

function SearchBar(props) {
	const [keyword, setKeyword] = useState('');
	const [location, setLocation] = useState('');
	const [isFullTime, setIsFullTime] = useState(false);

	const handleKeywordChange = (event) => {
		setKeyword(event.target.value);
	}

	const handleLocationChange = (event) => {
		setLocation(event.target.value);
	}

	const handleFullTimeChange = (event) => {
		setIsFullTime(event.target.checked);
	}

	const handleSearch = () => {
		// Faire une recherche avec les paramètres sélectionnés
		props.search(keyword, location, isFullTime);
	}

	return (
		<div className='search-bar'>
			<input  type="text" placeholder="Mot clé" value={keyword} onChange={handleKeywordChange} />
			<input type="text" placeholder="Pays" value={location} onChange={handleLocationChange} />
			<label>
				<input type="checkbox" checked={isFullTime} onChange={handleFullTimeChange} />
				Full Time Only
			</label>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
}

export default SearchBar;