import '../../css/card.css';
import { useState, useEffect } from 'react';
import moment from 'moment';
import logo from '../../assets/img/logo_sbg.png';
import { fetchData} from '../../api/api';
import { Link } from 'react-router-dom';

const Card = () => {
const [cards, setCards] = useState([]);
const getCards = async () => {
	const data = await fetchData();
	setCards(data)
};

	useEffect(() => {
		getCards();
	}, []);

	return (
		<div className='features'>
			{cards.map((card, index) => (
				<Link to={`/single-job/${card._id}`} key={index} className='job_list'>
					<img className='logo' src={logo} alt='Company Logo' />
					<div className='time_part'>
						<p>{moment(card.postedAt).fromNow()}</p>
						<p className='contract'>{card.contract}</p>
					</div>
					<h2>{card.position}</h2>
					<p>{card.company}</p>
					<a className='link' href={card.website}>
						Website
					</a>
				</Link>
			))}
		</div>
	);
};

export default Card;

































// import '../../css/card.css';
// import { useState, useEffect } from 'react';
// import moment from 'moment';
// import logo from '../../assets/img/logo_sbg.png';
// import { fetchData, extractData } from '../../api/api';

// const Card = () => {
// 	const [cards, setCards] = useState([]);

// 	useEffect(() => {
// 		const getCards = async () => {
// 			const data = await fetchData();
// 			const extractedData = data.map((card) => {
// 				const momentDate = moment(card.postedAt);
// 				return { ...extractData(card), postedAt: momentDate };
// 			});
// 			setCards(extractedData);
// 		};

// 		getCards();
// 	}, []);

// 	return (
// 		<div className='features'>
// 			{cards.map((card, index) => (
// 				<div key={index} className='job_list'>
// 					<img className='logo' src={logo} alt='Company Logo' />
// 					<div className='time_part'>
// 						<p>{card.postedAt.fromNow()}</p>
// 						<p className='contract'>{card.contract}</p>
// 					</div>
// 					<h2>{card.position}</h2>
// 					<p>{card.company}</p>
// 					<a className='link' href={card.website}>
// 						Website
// 					</a>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default Card;