import { Link } from 'react-router-dom';

import Img from '../assets/img/header/Frame.svg';

const Logo: React.FC = () => {
	return (
		<div className="logo__logotip">
			<div className="logotip__img _ibg">
				<Link to="/">
					<img src={Img} alt="LOGO" />
				</Link>
			</div>
			<div className="logotip__text">
				<Link to="/">
					<p>support</p>
					<p>ukraine</p>
				</Link>
			</div>
		</div>
	);
};
export default Logo;
