import '../../css/card.css';
import { useState, useEffect } from 'react';
import moment from 'moment';
import logo from '../../assets/img/logo_sbg.png';
import { fetchData } from '../../api/api';
import { Link } from 'react-router-dom';
import { deleteCardById } from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin_Card = () => {
	const [cards, setCards] = useState([]);
	const [showPopup, setShowPopup] = useState(false);

	const handleDelete = async (cardId, e) => {
		try {
		  await deleteCardById(cardId);
		  toast.success('Carte supprimée avec succès');
		  setTimeout(() => {
			window.location.reload(); // recharger le composant après 10 secondes
		  }, 4000);
		} catch (error) {
		  console.error(error.message);
		  toast.error('Une erreur s\'est produite lors de la suppression de la carte');
		}
	  };

	const getCards = async () => {
		const data = await fetchData();
		setCards(data)
	};

	useEffect(() => {
		getCards();
	}, []);

	useEffect(() => {
		if (showPopup) {
			setTimeout(() => {
				setShowPopup(false);
				getCards();
			}, 3000);
		}
	}, [showPopup]);

	return (
		<div className='features'>
			{cards.map((card, index) => (
				<div className='job_list' key={index}>
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
					<button onClick={() => handleDelete(card._id)}>Supprimer</button>
				</div>
			))}
			<ToastContainer position='top-right' />
		</div>
	);
};

export default Admin_Card;

































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