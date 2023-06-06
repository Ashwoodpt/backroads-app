import { socialLinks } from '../../data';

const SocialLinks = ({ parentStyle, itemStyle }: { parentStyle: string; itemStyle: string }) => {
	return (
		<ul className={parentStyle} id={parentStyle}>
			{socialLinks.map((link) => (
				<li key={link.id}>
					<a href={link.href} target="_blank" rel="noreferrer" className={itemStyle}>
						<i className={link.desc}></i>
					</a>
				</li>
			))}
		</ul>
	);
};
export default SocialLinks;
