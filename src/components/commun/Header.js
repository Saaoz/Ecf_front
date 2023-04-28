import Switchbtn from "./Switch";
import '../../css/Header.css';
import { Link } from 'react-router-dom';

function Header() {



	return (
		<header>
			<Link to={`*`}>
				<h1 className="dev_link">devjobs</h1>
			</Link>
			<Link to={`/admin`}>
				<button class='glowing-btn'><span class='glowing-txt'>A<span class='faulty-letter'>D</span>MIN</span></button>
			</Link>
			<Switchbtn />
		</header>
	);
}

export default Header;