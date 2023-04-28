import '../../css/card.css';
import { useState, useEffect } from 'react';
import moment from 'moment';
import logo from '../../assets/img/logo_sbg.png';
import { fetchData } from '../../api/api';
import { Link } from 'react-router-dom';

const Card = () => {
    const [cards, setCards] = useState([]);
    const [limit, setLimit] = useState(12);

    const getCards = async () => {
        const data = await fetchData();
        setCards(data.sort((a, b) => moment(b.postedAt) - moment(a.postedAt)));
    };

    useEffect(() => {
        getCards();
    }, []);

    const handleLoadMore = () => {
        setLimit(limit + 12);
    };

    return (
        <div className='features'>
            {cards.slice(0, limit).map((card) => (
                <div className='job_list' key={card._id}>
                    <Link to={`/single-job/${card._id}`} className='job-list_link'>
                        <img className='logo' src={logo} alt='Company Logo' />
                        <div className='time_part'>
                            <p>{moment(card.postedAt).fromNow()}</p>
                            <span className='Point_space'></span>
                            <p className='contract'>{card.contract}</p>
                        </div>
                        <h2>{card.position}</h2>
                        <p>{card.company}</p>
                    </Link>
                    <a className='web' href={card.website}>
                        Website
                    </a>
                </div>
            ))}
            {cards.length > limit ? (
                <div className='load-more'>
                    <button onClick={handleLoadMore}>Load more</button>
                </div>
            ) : (
                <div className='load-more'>Can't load more</div>
            )}
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