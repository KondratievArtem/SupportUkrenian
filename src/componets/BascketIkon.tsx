import { addItem, itemType, minusItem, remuveItem } from '../redux/slice/BascketSlice';
import { useAppDispatch } from '../redux/store';

type BascketProps = {
	// Типизация пропсов, создание типа для tsx
	id: string;
	color: string;
	price: number;
	type: string;
	tegline: string;
	imges: string;
	size: string;
	count: number;
};

const BascketIkon: React.FC<BascketProps> = ({ id, color, price, type, tegline, imges, size, count }) => {
	const dispatch = useAppDispatch();
	const priceLocal = count * price;
	return (
		<>
			<div className="basket__contants">
				<div className="basket__items">
					<div className="basket__items-img">
						<div className="basket__items-img-ibg">
							<img src={imges} alt="GoodsImg" />
						</div>
					</div>
					<div className="basket__items-titles">
						<div className="basket__items-title">
							<p>{type}</p>
							<p>{tegline}</p>
							<p>{color}</p>
						</div>
						<div className="basket__items-articl">
							<p>{id}</p>
						</div>
						<div className="basket__items-pracie">
							<p>{price}</p>
							<p>грн</p>
						</div>
					</div>
				</div>
				<div className="basket__items">
					{size.length > 0 ? (
						<div className="basket__items-tabl">
							<span>{size}</span>
						</div>
					) : (
						' '
					)}
				</div>
				<div className="basket__items">
					<div className="basket__items-tabl">
						<button onClick={() => dispatch(minusItem({ id } as itemType))}>-</button>
						<span>{count}</span>
						<button onClick={() => dispatch(addItem({ id } as itemType))}>+</button>
					</div>
				</div>
				<div className="basket__items">
					<div className="basket__items-pracie">
						<p>{priceLocal}</p>
						<p>грн</p>
					</div>
				</div>
				<div className="basket__items">
					<div className="basket__items-delet" onClick={() => dispatch(remuveItem({ id } as itemType))}>
						<span>+</span>
					</div>
				</div>
			</div>
			<div className="basket__contants-mini">
				<div className="basket__items">
					<div className="basket__items-img">
						<div className="basket__items-img-ibg">
							<img src={imges} alt="GoodsImg" />
						</div>
					</div>
					<div className="basket__items-titles">
						<div className="basket__icon-title">
							<div className="basket__items-title">
								<p>
									{type} {tegline}
								</p>

								<p>{color}</p>
							</div>
							<div className="basket__delet">
								<button className="basket__delet-button" onClick={() => dispatch(remuveItem({ id } as itemType))}>
									+
								</button>
							</div>
						</div>
						<div className="basket__items-icon">
							<div className="basket__items-pracie">
								<p>{price}</p>
								<p>грн</p>
							</div>
							<div className="basket__items-articl">
								<p>{id}</p>
							</div>
						</div>
						<div className="basket__item-info">
							<div className="basket__item-info-body">
								<div className="basket__item-info-body-all">
									<p>{count}</p>
								</div>
								<div className="basket__item-info-body-button">
									<button>
										<span onClick={() => dispatch(addItem({ id } as itemType))}></span>
									</button>
									<button onClick={() => dispatch(minusItem({ id } as itemType))}>
										<span></span>
									</button>
								</div>
							</div>
							{size.length > 0 ? (
								<div className="basket__item-info-tabl">
									<b>{size}</b>
								</div>
							) : (
								' '
							)}
							<div className="basket__item-info-summ">
								<p>{priceLocal}</p>
								<p>грн</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BascketIkon;
