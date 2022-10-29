import ImgFacebook from '../assets/img/header/Facebook.svg';
import ImgInstagram from '../assets/img/header/Instagram.svg';
import ImgViber from '../assets/img/header/Viber.svg';
import ImgTelegram from '../assets/img/header/Telegram.svg';

const Social: React.FC = () => {
	return (
		<div className="social">
			<a href="/">
				<div className="social__icon">
					<img src={ImgFacebook} alt="/assets/img/header/Facebook.svg" />
				</div>
			</a>
			<a href="/">
				<div className="social__icon">
					<img src={ImgInstagram} alt="/assets/img/header/Instagram.svg" />
				</div>
			</a>
			<a href="/">
				<div className="social__icon">
					<img src={ImgViber} alt="/assets/img/header/Viber.svg" />
				</div>
			</a>
			<a href="/">
				<div className="social__icon">
					<img src={ImgTelegram} alt="/assets/img/header/Telegram.svg" />
				</div>
			</a>
		</div>
	);
};
export default Social;
