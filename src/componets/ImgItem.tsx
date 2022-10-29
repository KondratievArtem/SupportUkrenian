import Group from '../assets/img/main/Group.svg';

const ImgIkon: React.FC = () => {
	return (
		<div className="items-logo">
			<div className="items-logo__img">
				<img src={Group} alt="Group.svg" />
			</div>
			<div className="items-logo__text">
				<p>support ukraine</p>
			</div>
		</div>
	);
};

export default ImgIkon;
