import OferIkon from '../componets/OferIkon';
import imgOfer from '../assets/img/ofert/image 39.svg';
import imgOfer2 from '../assets/img/ofert/image 40.svg';
// ======
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
type reduceType = { count: number; price: number };

const Ofer: React.FC = () => {
	const { item } = useSelector((state: RootState) => state.Bascket);
	const totalGoods = item.reduce((sum: number, el: reduceType) => el.count + sum, 0);
	const totalPrice = item.reduce((sum: number, el: reduceType) => el.count * el.price + sum, 0);
	return (
		<main className="ofer-main">
			<form className="ofer-main__container _container" action="" method="post">
				<section className="placing-order">
					<div className="placing-order__container">
						<div className="placing-order__title ">
							<h2>Оформлення замовлення</h2>
						</div>
						<div className="placing-order__recipient">
							<div className="placing-order__recipient-title">
								<h3>Отримувач</h3>
							</div>
							<div className="placing-order__recipient-form">
								<input type="text" name="name" required placeholder="ім'я*" />
								<input type="text" name="surname" required placeholder="Призвіще*" />
								<input type="tel" name="phone" placeholder="Номер телефону" />
								<input type="email" name="email" required placeholder="email*" />
							</div>
						</div>

						<div className="placing-order__delivery">
							<div className="placing-order__delivery-title">
								<h3>Доставка</h3>
							</div>
							<div className="placing-order__delivery-form">
								<div className="placing-order__delivery-address">
									<input type="text" name="country " required placeholder="Країна*" />
									<input type="text" name="citi" required placeholder="Місто*" />
									<input type="tel" name="index" required placeholder="Індекс*" />
									<input type="text" name="address" required placeholder="Адреса*" />
								</div>
								<div className="placing-order__delivery-method">
									<div className="placing-order__delivery-method-info">
										<p>
											<input id="method-1" defaultChecked type="radio" name="method" />
											<label htmlFor="method-1">Спосіб доставки 1</label>
										</p>
										<p>25/03/2022</p>
										<p>222</p>
									</div>
									<div className="placing-order__delivery-method-info">
										<p>
											<input id="method-2" type="radio" name="method" />
											<label htmlFor="method-2">Спосіб доставки 2</label>
										</p>
										<p>25/03/2022</p>
										<p>250</p>
									</div>
								</div>
							</div>
						</div>
						<div className="placing-order__payment">
							<div className="placing-order__payment-title">
								<h3>Оплата</h3>
							</div>
							<div className="placing-order__payment-form">
								<div className="placing-order__payment-form-input">
									<input id="payment-1" defaultChecked type="radio" name="peyment" />
									<label htmlFor="payment-1">Післяоплата по отриманню</label>
								</div>
								<div className="placing-order__payment-form-input">
									<input id="peyment-2" type="radio" name="peyment" />
									<label htmlFor="peyment-2">На розрахунковий рахунок</label>
								</div>
								<div className="placing-order__payment-form-input">
									<input id="peyment-3" type="radio" name="peyment" />
									<label htmlFor="peyment-3">
										{' '}
										<img src={imgOfer} alt="ofert/image 39.svg" /> Оплата банківською карткою Visa / MasterCard
									</label>
								</div>
								<div className="placing-order__payment-form-input">
									<input id="peyment-4" type="radio" name="peyment" />
									<label htmlFor="peyment-4">
										{' '}
										<img src={imgOfer2} alt="ofert/image 40.svg" />
										Грошовий онлайн перерахунок
									</label>
								</div>
							</div>
							<div className="order-composition__block order-composition__block-m">
								<div className="order-composition__summ">
									<div className="order-composition__summ-row">
										<p>сумма:</p>
										<p>850</p>
									</div>
									<div className="order-composition__summ-row">
										<p>доставка:</p>
										<p>222</p>
									</div>
									<div className="order-composition__summ-row">
										<p className="order-composition__summ-row-summ">всього:</p>
										<p className="order-composition__summ-row-number">1077</p>
									</div>
								</div>
								<div className="order-composition__button">
									<button type="submit">підтвердити замовлення</button>
								</div>
								<div className="order-composition__order-input">
									<input id="true-ofer" defaultChecked type="checkbox" name="true-ofer" value="true" />
									<label htmlFor="true-ofer">
										Підтверджуючи замовлення, я приймаю умови <a href="#">угоди користувача</a>
									</label>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="order-composition">
					<div className="order-composition__container">
						<div className="order-composition__title">
							<h2>Склад замовлення</h2>
						</div>
						<div className="order-composition__info">
							<p>
								{' '}
								{totalGoods} товар на сумму {totalPrice} грн{' '}
							</p>
						</div>
						<div className="order-composition__container-ikon">
							{item.map(
								(obj: { imges: string; type: string; tegline: string; color: string; size: string; price: number; count: number }, i: number) => (
									<OferIkon key={i} {...obj} />
								)
							)}
						</div>

						<div className="order-composition__block">
							<div className="order-composition__summ">
								<div className="order-composition__summ-row">
									<p>сумма:</p>
									<p>{totalPrice}</p>
								</div>
								<div className="order-composition__summ-row">
									<p>доставка:</p>
									<p>222</p>
								</div>
								<div className="order-composition__summ-row">
									<p className="order-composition__summ-row-summ">всього:</p>
									<p className="order-composition__summ-row-number">1077</p>
								</div>
							</div>
							<div className="order-composition__button">
								<button type="submit">підтвердити замовлення</button>
							</div>
							<div className="order-composition__order-input">
								<input id="true-ofer" type="checkbox" name="true-ofer" value="" />
								<label htmlFor="true-ofer">
									Підтверджуючи замовлення, я приймаю умови <a href="#">угоди користувача</a>
								</label>
							</div>
						</div>
					</div>
				</section>
			</form>
		</main>
	);
};

export default Ofer;
