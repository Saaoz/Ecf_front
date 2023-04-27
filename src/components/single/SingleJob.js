import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { fetchSingleData } from '../../api/api';
import logo from '../../assets/img/logo_sbg.png';
import Header from '../commun/Header';
import '../../css/Single.css'

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
			<Header/>
			<section>
				<img className='logo' src={logo} alt='Company Logo' />
				<div>
					<p>{job?.company}</p>
					<a>{job?.website}</a>
				</div>
					<a className='link' href={job?.website}>Website </a>
			</section>
			

			<section>
				<div>
					<div>
						<p>{moment(job?.postedAt).fromNow()}</p>
						<p>{job?.contract}</p>
					</div>
					<h2>{job?.position}</h2>
					<p>{job?.location}</p>
				</div>
				<p className='apply' href='#'>Apply Now </p>
			</section>


			<section className='description'>
				<p>{job?.description}</p>
			</section>

			<section className='requirements'>
				<div>
					<h2>Requirements</h2>
					<p>{job?.content}</p>
					<ul>
						{job?.items?.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</section>

			<section className='role'>
				<h2>What you will do</h2>
				<p>{job?.role.content}</p>
				<ul>
					{job?.role.items?.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</section>
			
			<section>
				<div>
					<h2>{job?.position}</h2>
					<p>{job?.company}</p>
				</div>
				<p className='apply' href='#'>Apply Now </p>
			</section>
		</>
		
	);
}

export default SingleJob;