import React, { useState } from 'react';
import { searchJobOffers } from '../../api/api';
import '../../css/Search.css';

function SearchBar(props) {
	const [positionOrCompany, setPositionOrCompany] = useState('');
	const [location, setLocation] = useState('');
	const [isFullTime, setIsFullTime] = useState(false);

	const handlePositionOrCompanyChange = (event) => {
		setPositionOrCompany(event.target.value);
	};

	const handleLocationChange = (event) => {
		setLocation(event.target.value);
	};

	const handleFullTimeChange = (event) => {
		setIsFullTime(event.target.checked);
	};

	const handleSearch = async () => {
		const cards = await searchJobOffers(positionOrCompany, location, isFullTime);
		props.search(cards);
	};

	return (
		<div className='search-bar'>
			<input type='text' placeholder='Filter by title or company...' value={positionOrCompany} onChange={handlePositionOrCompanyChange} />
			<input type='text' placeholder='Location' value={location} onChange={handleLocationChange} />
			<label>
				<input type='checkbox' checked={isFullTime} onChange={handleFullTimeChange} />
				Full Time Only
			</label>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
}

export default SearchBar;


