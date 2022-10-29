import { Link, useParams } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
// ====
import Pianino from '../componets/Pianino';
import Ikon from '../componets/Ikon';
import ImgIkon from '../componets/ImgItem';
import ImgTabl from '../assets/img/goods/ruler.svg';
import { addItem } from '../redux/slice/BascketSlice';
import { RootState, useAppDispatch } from '../redux/store';
import getDataLS from '../utilit/getDataLS';
import { useSelector } from 'react-redux';
// =============================================================================

type itemGoodType = {
	id: string;
	type: string;
	tegline: string;
	color: string;
	size: string[];
	imges: string;
	inStock: number;
	price: number;
	count: 0;
};
const Goods: React.FC = () => {
	const { item } = useSelector((state: RootState) => state.Bascket);
	const [itemGoods, setItemGoods] = React.useState<itemGoodType>();
	const [valueSize, setValueSize] = React.useState<string>('m');
	const dispatch = useAppDispatch();
	const { id } = useParams();
	const isMaunt = React.useRef(false);
	// ========
	console.log(item);

	React.useEffect(() => {
		if (isMaunt.current) {
			localStorage.setItem('cart', JSON.stringify(item));
		}
		isMaunt.current = true;
	}, [item]);

	React.useEffect(() => {
		window.scrollTo(0, 0);

		const getItem = async () => {
			try {
				const { data } = await axios.get<itemGoodType>(`http://localhost:3050/goods/${id}`);
				return setItemGoods(data);
			} catch (error) {}
		};

		getItem();
	}, [id]);

	if (!itemGoods) {
		return (
			<div className="_container">
				<h1>Товар не знайден</h1>
				<p>Спробуйте пізніше</p>
			</div>
		);
	}

	const sizeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValueSize(event.target.value);
	};

	const onClickAdd = () => {
		dispatch(addItem({ ...itemGoods, size: valueSize }));
	};

	return (
		<main className="main main-goods">
			<section className="main-goods__navigacia goods-navigacia">
				<div className="goods-navigacia__container _container">
					<nav className="navigacia">
						<div className="navigacia__back">
							<Link to="/">Головна</Link>
						</div>
						<div className="navigacia__back">
							<Link to="/Catalog">Каталог</Link>
						</div>
						<div className="navigacia__now">
							<p>
								{itemGoods.type} {itemGoods.tegline} {itemGoods.color}
							</p>
						</div>
					</nav>
				</div>
			</section>
			<section className="main-goods__content goods-content">
				<div className="goods-content__container _container">
					<div className="goods-content__columns">
						<div className="goods-content__column">
							<div className="goods-content__body-img">
								<div className="content-ikon__logo">
									<ImgIkon />
								</div>
								<div className="goods-content__img-ibg">
									<img src={itemGoods.imges} alt="goods/image.webp" />
								</div>
							</div>
						</div>
						<div className="goods-content__column">
							<div className="goods-content__body-description goods-description">
								<div className="goods-description__titles">
									<div className="goods-description__suptitle">
										<p>{itemGoods.type}</p>
									</div>
									<div className="goods-description__title">
										<h2>
											{itemGoods.type} {itemGoods.tegline} {itemGoods.color}
										</h2>
									</div>
								</div>
								<div className="goods-description__info-stock">
									<div className="goods-description__artcl">
										<p>{itemGoods.id}</p>
									</div>
									<div className="goods-description__in-stock">
										{itemGoods.inStock !== 0 ? <p className="in-stock">Товар в наявності</p> : <p className="missing">Товар відсутній</p>}
									</div>
								</div>
								<div className="goods-description__price">
									<p>{itemGoods.price} UAN</p>
								</div>
								<div className="goods-description__text">
									<p>
										Ми тут захищаємо цінності, які ми поділяємо в Європі та світі. Ми робимо все можливе, щоб цінності Путіна не поширювалися далі,
										навіть за межі наших кордонів. Наша армія сильна і рішуча, але вони недостатньо.
									</p>
								</div>
								{itemGoods.size ? (
									<div className="goods-description__select-size select-size">
										<div className="select-size__title">
											<p>Виберіть розмір (us)</p>
										</div>
										<div className="select-size__body">
											<form className="select-size__form" action="#">
												{itemGoods.size.map((i) => (
													<label className="select-size__label" key={i + 1}>
														<input checked={valueSize === i} onChange={sizeValue} type="radio" name="size" value={i} />
														<span className="select-size__span">{i}</span>
													</label>
												))}
											</form>
											<div className="select-size__tabl">
												<div className="select-size__img">
													<img src={ImgTabl} alt="goods/ruler.svg" />
												</div>
												<div className="select-size__text">
													<p>Таблиця розмірів</p>
												</div>
											</div>
										</div>
									</div>
								) : (
									' '
								)}
								<div className="goods-description__basket">
									<div className="goods-description__add-basket">
										<button onClick={onClickAdd} id="add-goods">
											додати до кошика
										</button>
									</div>
								</div>
								<div className="goods-description__pianino">
									<Pianino />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="goods-content__pianino">
					<div className="goods-content__container _container">
						<Pianino />
					</div>
				</div>
				<div className="goods-content__body-seo body-seo">
					<div className="body-seo__container _container">
						<div className="goods-content__seo-title">
							<h6>Тут ви можете розмістити сео текст</h6>
						</div>
						<div className="goods-content__seo-text">
							<p>
								Ми тут захищаємо цінності, які ми поділяємо в Європі та світі. Ми робимо все можливе, щоб цінності Путіна не поширювалися далі, навіть
								за межі наших кордонів. Наша армія сильна і рішуча, але вони недостатньо.Ми тут захищаємо цінності, які ми поділяємо в Європі та
								світі. Ми робимо все можливе, щоб цінності Путіна не поширювалися далі, навіть за межі наших кордонів. Наша армія сильна і рішуча, але
								вони недостатньо.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="goods-content__recommended-goods recommended-goods">
				<div className="recommended-goods__container _container">
					<div className="recommended-goods__title">
						<h2>рекомендовані товари</h2>
					</div>
					<div className="recommended-goods__body">
						<Ikon {...itemGoods} />
						<Ikon {...itemGoods} />
						<Ikon {...itemGoods} />
						<Ikon {...itemGoods} />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Goods;
