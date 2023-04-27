import Switchbtn from "../commun/Switch";
import '../../css/Header.css'
import { Link } from 'react-router-dom';

function Admin_Header() {



	return (
		<header>
			<Link to={`*`}>
			<h1 className="dev_link">Admin.devjobs</h1>
			</Link>
			<Switchbtn/>
		</header>
	);
}

export default Admin_Header;