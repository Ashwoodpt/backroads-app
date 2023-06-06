import NavLinks from '../NavLinks/NavLinks';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
	return (
		<footer className="section footer">
			<NavLinks parentStyle="footer-links" itemStyle="footer-link" />
			<SocialLinks parentStyle="footer-icons" itemStyle="footer-icon" />
			<p className="copyright">
				copyright &copy; Backroads travel tours company
				<span id="date">{new Date().getFullYear()}</span> all rights reserved
			</p>
		</footer>
	);
};
export default Footer;
