import Logo from './Logo';
import Social from './Social';
import ImgLocat from '../assets/img/footer/locacion.svg';
import ImgPhone from '../assets/img/footer/phone.svg';
import ImgEmail from '../assets/img/footer/email.svg';
import { setCatalogId, clearCatalog } from '../redux/slice/FilterSlice';

import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';

type listType = {
	name: string;
	value: string;
};

const list: listType[] = [
	{ name: 'Стікери', value: 'Stiker' },
	{ name: 'Прапори', value: 'Prapor' },
	{ name: 'Плакати', value: 'Baner' },
];
const list2: listType[] = [
	{ name: 'Худі', value: 'Sweatshirt' },
	{ name: 'Кепки', value: 'baysbolka' },
	{ name: 'Екосумки', value: 'sumka' },
	{ name: 'Футболки', value: 'footbolka' },
];

const Footer: React.FC = () => {
	const dispatch = useAppDispatch();
	const addCatagorii = (obj: listType) => {
		dispatch(clearCatalog());
		dispatch(setCatalogId(obj.value));
	};
	return (
		<footer className="footer">
			<div className="footer__container _container">
				<div className="footer__body">
					<div className="footer__logo logo">
						<Logo />
						<div className="logo__text">
							<p>
								Виручені кошти від продукції ми передамо <br /> на допомогу армії та гуманітарні потреби
							</p>
						</div>
					</div>
					<div className="footer__contact" id="contact">
						<div className="footer__ikon">
							<div className="footer__ibg">
								<a href="https://goo.gl/maps/M9gTJrtrLR3ubyz16">
									<img src={ImgLocat} alt="locacion" />
								</a>
							</div>
							<div className="footer__adres-text">
								<a href="https://goo.gl/maps/M9gTJrtrLR3ubyz16">Україна, м. Львів, вул. Шевченка, 45А/34</a>
							</div>
						</div>
						<div className="footer__ikon">
							<div className="footer__ibg ">
								<a href="tel:+12894563455">
									<img src={ImgPhone} alt="phone.svg" />
								</a>
							</div>
							<div className="footer__adres-text">
								<a href="tel:+12894563455">+1289 456 3455</a>
							</div>
						</div>
						<div className="footer__ikon">
							<div className="footer__ibg ">
								<a href="mailto:supportukraine@gmai.com">
									<img src={ImgEmail} alt="email.svg" />
								</a>
							</div>
							<div className="footer__adres-text">
								<a href="mailto:supportukraine@gmai.com">supportukraine@gmai.com</a>
							</div>
						</div>
					</div>
					<div className="footer__all-info">
						<div className="footer__rights-title">
							<p>©2022 Supportukraine All Rights Reserved</p>
						</div>
						<div className="footer__linck">
							<a href="#">Privacy Center</a>
							<a href="#">Privacy & Cookie Policy</a>
							<a href="#">Terms & Conditions</a>
						</div>
					</div>
				</div>
				<div className="footer__body footer__body-60">
					<div className="footer__body-column">
						<div className="footer__column column footer__column-basis33">
							<div className="column__title">
								<h4>Каталог товарів</h4>
							</div>
							<div className="column__body-twixs">
								<div className="column__body body-twixs-body">
									{list.map((obj: listType, i: number) => (
										<Link to="catalog" onClick={() => addCatagorii(obj)} key={i}>
											{obj.name}
										</Link>
									))}
								</div>
								<div className="column__body body-twixs-body">
									{list2.map((obj: listType, i: number) => (
										<Link to="catalog" onClick={() => addCatagorii(obj)} key={i}>
											{obj.name}
										</Link>
									))}
								</div>
							</div>
						</div>
						<div className="footer__columns footer__column-basis67">
							<div className="footer__column column">
								<div className="column__title">
									<h4>Покупцям</h4>
								</div>
								<div className="column__body">
									<a href="#">Гарантія та обмін</a>
									<a href="#">FAQ</a>
									<a href="#">Оплата і доставка</a>
									<a href="#">Таблиця розмірів</a>
								</div>
							</div>
							<div className="footer__column column">
								<div className="column__title">
									<h4>Соцмережі</h4>
								</div>
								<div className="column__body">
									<Social />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
