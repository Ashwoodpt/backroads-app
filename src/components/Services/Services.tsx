import { ServiceCards } from '../../data';
import Title from '../Title/Title';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
	return (
		<section className="section services" id="services">
			<Title title="our" subTitle="services" />

			<div className="section-center services-center">
				{ServiceCards.map((card) => (
					<ServiceCard key={card.id} icon={card.icon} title={card.title} text={card.text} />
				))}
			</div>
		</section>
	);
};
export default Services;
