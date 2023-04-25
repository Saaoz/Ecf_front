import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { fetchSingleData } from '../../api/api';

const SingleJob = () => {
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
        <div className='single_job'>
			<div className='company_part'>
				<p>{job?.company}</p>
				<a className='link' href={job?.website}>
					Website
				</a>
			</div>
			<h1>{job?.position}</h1>
			<div className='job_info'>
				<p>{moment(job?.postedAt).fromNow()}</p>
				<p>{job?.contract}</p>
				<p>{job?.location}</p>
			</div>
			<div className='description'>
				<h2>Description</h2>
				<p>{job?.description}</p>
			</div>
			<div className='requirements'>
				<h2>Requirements</h2>
				<p>{job?.content}</p>
				<ul>
					{job?.items?.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
			<div className='role'>
				<h2>What you will do</h2>
				<p>{job?.role.content}</p>
				<ul>
					{job?.role.items?.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
			<a className='apply' href='#'>
				Apply Now
			</a> */

		</div>
	);
};

export default SingleJob;