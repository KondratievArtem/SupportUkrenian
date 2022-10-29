import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './bascket.module.scss';
import BascketIkon from '../../componets/BascketIkon';
import imgIcon from '../../assets/img/bascket/basket_icon.svg';
import { RootState } from '../../redux/store';
import React from 'react';

type itemType = {
	id: string;
	tegline: string;
	type: string;
	color: string;
	inStock: number;
	price: number;
	size: string;
	imges: string;
	count: number;
};

type reduceType = { count: number; price: number };

const Bascket: React.FC = () => {
	const isMaunt = React.useRef(false);
	const { item } = useSelector((state: RootState) => state.Bascket);

	React.useEffect(() => {
		if (isMaunt.current) {
			localStorage.setItem('cart', JSON.stringify(item));
		}
		isMaunt.current = true;
	}, [item]);

	if (item.length < 1) {
		return (
			<div className={style.root}>
				<div>
					<h4 className="nulle">Зроби покупку, допоможи врятувати свою країну</h4>
					<p>та перемогти російських окупантів</p>
				</div>
				<div className={style.img}>
					<img src={imgIcon} alt="icon" />
				</div>
			</div>
		);
	}

	const totalPrice = item.reduce((sum: number, el: reduceType) => el.count * el.price + sum, 0);
	return (
		<main className="main main-basket basket">
			<section className="basket__navigacia">
				<div className="basket__container _container">
					<nav className="navigacia">
						<div className="navigacia__back">
							<Link to="/">Головна</Link>
						</div>
						<div className="navigacia__now">
							<p>Кошик</p>
						</div>
					</nav>
				</div>
			</section>
			<section className="basket__table">
				<div className="basket__container _container">
					<div className="basket__body">
						<div className="basket__title">
							<h3>Товар</h3>
							<h3>Розмір</h3>
							<h3>Кількість</h3>
							<h3>Ціна</h3>
						</div>
					</div>
					<div className="basket__table-ikon">
						{item.map((obj: itemType, i: number) => (
							<BascketIkon key={i} {...obj} />
						))}
					</div>

					<div className="basket__button">
						<div className="basket__summ">
							<p>Сумма:</p>
							<p>{totalPrice} грн</p>
						</div>
						<div className="basket__ofert">
							<Link to="ofer">Оформити замовлення</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Bascket;
