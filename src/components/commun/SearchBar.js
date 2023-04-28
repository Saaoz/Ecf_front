import React, { useState } from 'react';
import { searchJobOffers } from '../../api/api';
import '../../css/Search.css';
import icon_search from '../../assets/img/search.svg';
import icon_location from '../../assets/img/location.svg';

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
		// console.log(positionOrCompany, location, isFullTime)
		const cards = await searchJobOffers(positionOrCompany, location, isFullTime);
		props.search(cards);
	};

	return (

		<div className='search_bar'>
			<div className='lot_search'>
				<img src={icon_search} alt='icon_search' />
				<input className='company_input' type='text' placeholder='Filter by title or company...' value={positionOrCompany} onChange={handlePositionOrCompanyChange} />
			</div>
			<div className='lot_country'>
				<img src={icon_location} alt='icon_location' />
				<input className='country_input' type='text' placeholder='Location' value={location} onChange={handleLocationChange} />
			</div>
			<label className='check_full'>
				<input type='checkbox' checked={isFullTime} onChange={handleFullTimeChange} />
				Full Time Only
			</label>
			<button className='btn_search' onClick={handleSearch}>Search</button>
		</div>
	);
}

export default SearchBar;


