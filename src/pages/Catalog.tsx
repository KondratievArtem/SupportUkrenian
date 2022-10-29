import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
// =======
import { setFilters, setFilterType, setOpenFiltr } from '../redux/slice/FilterSlice';
import { fetchGoods } from '../redux/slice/fetchGoodsSlice';
import Filtr from '../componets/Filtr';
import Info from '../componets/Info';
import SelectRang from '../componets/SelectRang';
import Ikon from '../componets/Ikon';
import IkonFilt from '../assets/img/catalog/filter (1) 1.svg';
import Skeleton from '../componets/Skeleton';
import Pagination from '../componets/pagination';
import { RootState, useAppDispatch } from '../redux/store';

type goodsType = { id: string; tegline: string; type: string; color: string; inStock: number; price: number; imges: string };

const Catalog: React.FC = () => {
	const { catalogId, sort, curentPag, openFiltr } = useSelector((state: RootState) => state.Filters);
	const { goodsState, loading } = useSelector((state: RootState) => state.goods);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const refOpenFiltr = React.useRef<HTMLDivElement>(null);
	const isSearch = React.useRef<boolean>();
	const isMaunted = React.useRef<boolean>(false);
	// =====
	const clickOpenFiltr = () => {
		dispatch(setOpenFiltr(!openFiltr));
	};

	const getGoods = () => {
		let linck = ' ';
		for (let i = 0; i < catalogId.length; i++) {
			linck += `&type=${catalogId[i]}`;
		}

		dispatch(fetchGoods({ linck, sort, curentPag }));
	};

	// =====

	React.useEffect(() => {
		if (window.location.search) {
			// если в url есть какойто адрес то парсим его и передайом в redux
			const params = qs.parse(window.location.search.substring(1)) as unknown as setFilterType;
			dispatch(setFilters(params));
			isSearch.current = true;
		}
	}, []);

	React.useEffect(() => {
		window.scrollTo(0, 0);

		if (!isSearch.current) {
			// хук первый рендер страницы
			getGoods();
		}
		isSearch.current = false;
	}, [curentPag, sort, catalogId]);

	React.useEffect(() => {
		if (isMaunted.current) {
			// хук переводим в строку url в строку
			const queriString = qs.stringify({
				curentPag,
				sort,
				catalogId,
			});

			navigate(`?${queriString}`);
		}
		isMaunted.current = true;
	}, [curentPag, sort, catalogId]);

	return (
		<main className="main main-catalog catalog">
			<div className="catalog__container _container">
				<nav className="navigacia">
					<div className="navigacia__back">
						<Link to="/">Головна</Link>
					</div>
					<div className="navigacia__now">
						<p>Каталог</p>
					</div>
				</nav>
				<div className="catalog__info">
					<div className="catalog__info-event">
						<Info />
					</div>
					<div className="catalog__ikon-filter" ref={refOpenFiltr} onClick={() => clickOpenFiltr()}>
						<div className="catalog__ikon-filter-img">
							<span className={catalogId.length > 0 ? 'catalog__span-filter activ' : 'catalog__span-filter'}>{catalogId.length}</span>
							<img src={IkonFilt} alt="catalog/filter (1) 1.svg" />
						</div>
						<div className="catalog__ikon-filter-title">
							<h6>filters</h6>
						</div>
					</div>
					<SelectRang />
				</div>
				<div className="catalog__body">
					<Filtr />
					<div className="catalog__catalog-content-body">
						{loading === 'rejected' ? (
							<h1>Товар не знайден</h1>
						) : (
							<div className="catalog__content content__ikon">
								{loading === 'pending'
									? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
									: goodsState.map((obj: goodsType, i: number) => <Ikon key={i} {...obj} />)}
							</div>
						)}

						<div className="catalog__paginacia">{goodsState.length < 6 ? ' ' : <Pagination />}</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Catalog;
