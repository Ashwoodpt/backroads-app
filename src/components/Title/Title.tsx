const Title = ({ title, subTitle }: { title: string; subTitle: string }) => {
	return (
		<div className="section-title">
			<h2>
				{title} <span>{subTitle}</span>
			</h2>
		</div>
	);
};
export default Title;
