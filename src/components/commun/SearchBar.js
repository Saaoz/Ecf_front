import React, { useState } from 'react';
import { searchJobOffers } from '../../api/api';
import '../../css/Search.css';

function SearchBar(props) {
	const [company, setCompany] = useState('');
	const [keyword, setKeyword] = useState('');
	const [location, setLocation] = useState('');
	const [isFullTime, setIsFullTime] = useState(false);

	const handleCompanyChange = (event) => {
		setCompany(event.target.value);
	};

	const handleKeywordChange = (event) => {
		setKeyword(event.target.value);
	};

	const handleLocationChange = (event) => {
		setLocation(event.target.value);
	};

	const handleFullTimeChange = (event) => {
		setIsFullTime(event.target.checked);
	};

	const handleSearch = async () => {
		const cards = await searchJobOffers(keyword, location, isFullTime, company);
		props.search(cards);
	};

	return (
		<div className='search-bar'>
			<input type='text' placeholder='Filter by title, companies, expertise…' value={keyword, company} onChange={handleKeywordChange} />
			<input type='text' placeholder='Country' value={location} onChange={handleLocationChange} />
			<label>
				<input type='checkbox' checked={isFullTime} onChange={handleFullTimeChange} />
				Full Time Only
			</label>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
}

export default SearchBar;