const TourCard = ({ image, date, title, text, destination, duration, price }: { image: string; date: string; title: string; text: string; destination: string; duration: string; price: string }) => {
	return (
		<article className="tour-card">
			<div className="tour-img-container">
				<img src={image} className="tour-img" alt="" />
				<p className="tour-date">{date}</p>
			</div>
			<div className="tour-info">
				<div className="tour-title">
					<h4>{title}</h4>
				</div>
				<p>{text}</p>
				<div className="tour-footer">
					<p>
						<span>
							<i className="fas fa-map"></i>
						</span>{' '}
						{destination}
					</p>
					<p>{duration}</p>
					<p>{price}</p>
				</div>
			</div>
		</article>
	);
};
export default TourCard;
