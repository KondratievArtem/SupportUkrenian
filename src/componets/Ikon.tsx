import { Link } from 'react-router-dom';
import ImgItem from './ImgItem';

type IconProps = {
	imges: string;
	type: string;
	tegline: string;
	color: string;
	price: number;
	id: string;
};

const Ikon: React.FC<IconProps> = ({ imges, type, tegline, color, price, id }) => {
	return (
		<div className="content-ikon">
			<div className="content-ikon__img">
				<div className="content-ikon__logo">
					<ImgItem />
				</div>
				<Link className="content-ikon__img-ibg _ibg" to={`goods/${id}`}>
					<img src={imges} alt="goods/image.webp" />
				</Link>
			</div>
			<div className="content-ikon__naim">
				<Link to={`goods/${id}`}>
					<p>
						{type} {tegline} {color}
					</p>
				</Link>
			</div>
			<div className="content-ikon__cost">
				<p>{price} UAN</p>
			</div>
		</div>
	);
};

export default Ikon;
