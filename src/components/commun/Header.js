import Switchbtn from "./Switch";
import '../../css/Header.css'
import { Link } from 'react-router-dom';

function Header() {



	return (
		<header>
			<Link to={`*`}>
			<h1 className="dev_link">devjobs</h1>
			</Link>
			<Switchbtn/>
		</header>
	);
}

export default Header;