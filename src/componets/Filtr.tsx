import { useSelector } from 'react-redux';
// ===
import Info from './Info';
import { setCatalogId, clearCatalog } from '../redux/slice/FilterSlice';
import { RootState, useAppDispatch } from '../redux/store';

type listType = Record<string, string>;

const list: listType[] = [
	{ name: 'Стікери', value: 'Stiker' },
	{ name: 'Прапори', value: 'Prapor' },
	{ name: 'Плакати', value: 'Baner' },
	{ name: 'Футболки', value: 'footbolka' },
	{ name: 'Худі', value: 'Sweatshirt' },
	{ name: 'Кепки', value: 'baysbolka' },
	{ name: 'Екосумки', value: 'sumka' },
];

const Filtr: React.FC = () => {
	const dispatch = useAppDispatch();
	const { catalogId, openFiltr } = useSelector((state: RootState) => state.Filters);

	const targetState = (obj: listType) => {
		dispatch(setCatalogId(obj.value));
	};

	return (
		<form className={openFiltr === true ? 'catalog__filtr filtr activ' : 'catalog__filtr filtr'}>
			<div className="filtr__text">
				<p>Фільтри:</p>
			</div>
			<div className="filtr__button">
				<button className="reset-button" onClick={() => dispatch(clearCatalog())} type="button">
					Очистити фільтр <span></span>
				</button>
			</div>
			<div className="catalog__filtr-info-event">
				<Info />
			</div>

			<div className="filtr__catalog">
				<div className="filtr__block filtr-title">
					<h4>Категорія</h4>
					<ul>
						{list.map((obj: listType, index: number) => (
							<li
								className={
									catalogId.find((item) => item === obj.value) !== undefined ? 'filtr__block-input filtr__block-input--checked' : 'filtr__block-input'
								}
								onClick={() => targetState(obj)}
								key={index}>
								<a>{obj.name}</a>
							</li>
						))}
					</ul>
				</div>
				{/* <div className="filtr__block filtr-title">
                    <h4>Розмір</h4>
                    <ul>
                        <li>
                            <input  className="filtr__block-input" id="rozmir-M" type="checkbox" value="rozmir-M" />
                            <label htmlFor="rozmir-M">M</label>
                        </li>
                        <li>
                            <input  className="filtr__block-input" id="rozmir-L" type="checkbox" value="rozmir-L" />
                            <label htmlFor="rozmir-L">L</label>
                        </li>
                        <li>
                            <input  className="filtr__block-input" id="rozmir-XL" type="checkbox" value="rozmir-XL" />
                            <label htmlFor="rozmir-XL">XL</label>
                        </li>
                        <li>
                            <input  className="filtr__block-input" id="rozmir-XXL" type="checkbox" value="rozmir-XXL" />
                            <label htmlFor="rozmir-XXL">XXL</label>
                        </li>
                    </ul>
                </div>  */}
				{/* <div className="filtr__block filtr-title">
                    <h4>Колір</h4>
                    <ul>
                        <li>
                            <input className="filtr__block-input" id="color-black" type="checkbox" value="color-black" />
                            <label htmlFor="color-black">Чоний</label>
                        </li>
                        <li>
                            <input className="filtr__block-input" id="color-white" type="checkbox" value="color-white" />
                            <label htmlFor="color-white">Білий</label>
                        </li>
                    </ul>
                </div> */}
			</div>
		</form>
	);
};
export default Filtr;
