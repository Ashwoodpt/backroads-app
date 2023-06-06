const ServiceCard = ({ icon, title, text }: { icon: string; title: string; text: string }) => {
	return (
		<article className="service">
			<span className="service-icon">
				<i className={icon}></i>
			</span>
			<div className="service-info">
				<h4 className="service-title">{title}</h4>
				<p className="service-text">{text}</p>
			</div>
		</article>
	);
};
export default ServiceCard;
