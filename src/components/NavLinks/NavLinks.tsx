import { pageLinks } from '../../data';

const NavLinks = ({ parentStyle, itemStyle }: { parentStyle: string; itemStyle: string }) => {
	return (
		<ul className={parentStyle} id={parentStyle}>
			{pageLinks.map((link) => (
				<li key={link.id}>
					<a href={link.href} className={itemStyle}>
						{' '}
						{link.desc}{' '}
					</a>
				</li>
			))}
		</ul>
	);
};
export default NavLinks;
