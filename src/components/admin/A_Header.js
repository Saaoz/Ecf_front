import Switchbtn from "../commun/Switch";
import '../../css/header.css'
import { Link } from 'react-router-dom';

function Admin_Header() {



	return (
		<header>
			<Link to={`*`}>
			<h1 className="dev_link">Admin.devjobs</h1>
			</Link>

			<Link to={`/admin/formulaire`}>
				<button class='glowing-btn'><span class='glowing-txt'>C<span class='faulty-letter'>R</span>EATE</span></button>
			</Link>
			<Switchbtn/>
		</header>
	);
}

export default Admin_Header;