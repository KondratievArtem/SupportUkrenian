import Leng from './Lengwich';
import Logo from './Logo';
import Social from './Social';
import ImgCor from '../assets/img/header/Cart.svg';
import { setCatalogId, clearCatalog } from '../redux/slice/FilterSlice';
// --------
import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
// ============
type CategoriiType = {
	name: string;
	value: string;
};
type reduceType = { count: number };
// =======
const listCategorii: CategoriiType[] = [
	{ name: 'Стікери', value: 'Stiker' },
	{ name: 'Прапори', value: 'Prapor' },
	{ name: 'Плакати', value: 'Baner' },
	{ name: 'Худі', value: 'Sweatshirt' },
	{ name: 'Кепки', value: 'baysbolka' },
	{ name: 'Екосумки', value: 'sumka' },
	{ name: 'Футболки', value: 'footbolka' },
];

const Header: React.FC = () => {
	const { item } = useSelector((state: RootState) => state.Bascket);
	const [activCatalog, setActivCatalog] = React.useState<boolean>(false);
	const [activBurger, setActivBurger] = React.useState<boolean>(false);
	const refMenu = React.useRef<HTMLDivElement>(null);
	const refBurger = React.useRef<HTMLDivElement>(null);
	const refOpenBurger = React.useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();
	const totalCuont = item.length > 0 ? item.reduce((sum: number, items: reduceType) => sum + items.count, 0) : ' ';

	type popupClose = MouseEvent & {
		path: Node[];
	};

	React.useEffect(() => {
		const ClickCloseCatalog = (event: MouseEvent) => {
			const _event = event as popupClose;
			if (refMenu.current && !_event.path.includes(refMenu.current)) {
				setActivCatalog(false);
			}
		};

		const ClickCloseBurger = (event: MouseEvent) => {
			const _event = event as popupClose;
			if (refOpenBurger.current && _event.path.includes(refOpenBurger.current)) {
				return setActivBurger(true), document.body.classList.add('activ');
			}
			if (refBurger.current && !_event.path.includes(refBurger.current)) {
				return setActivBurger(false), document.body.classList.remove('activ');
			}
		};

		document.body.addEventListener('click', ClickCloseCatalog);
		document.body.addEventListener('click', ClickCloseBurger);
	}, []);

	const clickOpenBurger = () => {
		setActivBurger(false);
		document.body.classList.remove('activ');
	};

	const addCategorii = (obj: CategoriiType) => {
		dispatch(clearCatalog());
		dispatch(setCatalogId(obj.value));
		setActivCatalog(false);
		clickOpenBurger();
	};

	return (
		<header className="header">
			<div className="header__container _container">
				<div className="header__logo logo">
					<div ref={refOpenBurger} className="logo__open-burger">
						<span></span>
					</div>
					<Logo />
				</div>

				<nav className="header__navbar navbar">
					<Link className="navbar__title " to="/">
						Головна
					</Link>
					<div className="navbar__min-menu" ref={refMenu}>
						<div className="min-manu-title">
							<p>
								<Link className="navbar__title" to="Catalog">
									Каталог
								</Link>
							</p>
							<div onClick={() => setActivCatalog(!activCatalog)} className="navbar__title-open"></div>
						</div>
						<nav className={activCatalog === true ? 'navbar__manu activ' : 'navbar__manu'}>
							<ul>
								{listCategorii.map((obj: CategoriiType, i: number) => (
									<li key={i} onClick={() => addCategorii(obj)}>
										<Link to="Catalog">{obj.name}</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<a className="navbar__title " href="/">
						Контакти
					</a>
					<a className="navbar__title " href="/">
						Як допомогти
					</a>
				</nav>
				<div className="header__social">
					<Social />
				</div>

				<div className="header__box-menu box-menu">
					<div className="box-menu__corzina">
						<span className={totalCuont > 0 ? 'box-menu__activ activ' : 'box-menu__activ'}>{totalCuont}</span>
						<Link to="bascket">
							<img src={ImgCor} alt="corzina" />
						</Link>
					</div>
					<div className="header__box-menu-close-len">
						<Leng />
					</div>
				</div>
				<div className={activBurger === true ? 'header__br-menu br-menu activ' : 'header__br-menu br-menu'} ref={refBurger}>
					<div className="br-menu__header">
						<Logo />
						<div onClick={clickOpenBurger} className="br-menu__close">
							<p>Меню</p>
							<div className="br-menu__line"></div>
						</div>
					</div>
					<div className="br-menu__body">
						<div className="br-menu__nav">
							<div className="br-menu__home">
								<a className="br-menu__title _title" href="/">
									Головна
								</a>
								<Leng />
							</div>
							<div className="br-menu__min-menu">
								<p className="br-menu__title _title">
									<a href="/Catalog">Каталог</a>
								</p>
								<nav className="br-menu__filter">
									{listCategorii.map((obj: CategoriiType, i: number) => (
										<Link to="/Catalog" key={i} onClick={() => addCategorii(obj)}>
											{obj.name}
										</Link>
									))}
								</nav>
							</div>
							<a href="/" className="br-menu__title _title">
								Контакти
							</a>
							<a href="/" className="br-menu__title _title">
								Як допомогти
							</a>
						</div>
						<Social />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
