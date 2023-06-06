import logo from '../../assets/logo.svg';
import NavLinks from '../NavLinks/NavLinks';
import SocialLinks from '../SocialLinks/SocialLinks';

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="nav-logo" alt="backroads" />
					<button type="button" className="nav-toggle" id="nav-toggle">
						<i className="fas fa-bars"></i>
					</button>
				</div>
				<NavLinks parentStyle="nav-links" itemStyle="nav-link" />
				<SocialLinks parentStyle="nav-icons" itemStyle="nav-icon" />
			</div>
		</nav>
	);
};
export default NavBar;
