import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { fetchSingleData } from '../../api/api';
import logo from '../../assets/img/logo_sbg.png';
import Header from '../commun/Header';
import '../../css/single.css'

function SingleJob() {
	const { id } = useParams(); // Récupère l'id dans l'URL
	const [job, setJob] = useState(null); // Initialise l'offre à null

	const getJob = async () => {
		const data = await fetchSingleData(id);  // Récupère toutes les offres
		// console.log(data.company)
		setJob(data)
	};

	useEffect(() => {
		getJob()
		// console.log(id);
	}, [id]);

	return (
		<>
			<Header />
			<section className='Single_body'>
				<section className='Single_header'>
					<img className='Single_logo' src={logo} alt='Company Logo' />
					<div className='Single_flex'>
						<div>
							<h2>{job?.company}</h2>
							<a>{job?.website}</a>
						</div>
						<a className='Single_btn Single_link' href={job?.website}>Company Site </a>
					</div>
				</section>

				<section className='Single_father'>
					<section className='Single_contract'>
						<div className='Single_contract_son'>
							<div className='Single_contract_time'>
								<p>{moment(job?.postedAt).fromNow()}</p>
								<span className='Point_space'></span>
								<p>{job?.contract}</p>
							</div>
							<h1>{job?.position}</h1>
							<h4>{job?.location}</h4>
						</div>
						<p className='Single_btn Single_apply' href='#'>Apply Now </p>
					</section>


					<section className='Single_bio'>
						<p>{job?.description}</p>
					</section>

					<section className='Single_require'>
						<div>
							<h3>Requirements</h3>
							<p>{job?.requirements.content}</p>
							<ul>
								{job?.requirements.items?.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</section>

					<section className='Single_role'>
						<h3>What you will do</h3>
						<p>{job?.role.content}</p>
						<ul>
							{job?.role.items?.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</section>
				</section>
			</section>
			<footer className='Single_footer'>
				<section className='Single_footer_son'>
					<div>
						<h3>{job?.position}</h3>
						<p>{job?.company}</p>
					</div>
					<p className='Single_btn Single_apply' href='#'>Apply Now </p>
				</section>
			</footer>
		</>

	);
}

export default SingleJob;