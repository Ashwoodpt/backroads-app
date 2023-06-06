import Title from '../Title/Title';
import { TourCards } from '../../data';
import TourCard from './TourCard/TourCard';

const Tours = () => {
	return (
		<section className="section" id="tours">
			<Title title="featured" subTitle="tours" />

			<div className="section-center featured-center">
				{TourCards.map((card) => {
					const { id, image, date, title, text, destination, duration, price } = card;
					return <TourCard key={id} image={image} date={date} title={title} text={text} destination={destination} duration={duration} price={price} />;
				})}
			</div>
		</section>
	);
};
export default Tours;
