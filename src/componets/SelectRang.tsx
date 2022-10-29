import React from 'react';
import Img from '../assets/img/catalog/sort.svg';
import { useSelector } from 'react-redux';
// ====
import { setSort } from '../redux/slice/FilterSlice';
import { RootState, useAppDispatch } from '../redux/store';

type listType = {
	name: string;
	sortProperti: string;
};

type popupClose = MouseEvent & {
	path: Node[];
};

const SelectRang: React.FC = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const sortRef = React.useRef<HTMLDivElement>(null);
	const sort = useSelector((state: RootState) => state.Filters.sort);
	const dispatch = useAppDispatch();

	const list: listType[] = [
		{ name: 'По зростанню ціни', sortProperti: '&_order=asc' },
		{ name: 'По спаданю ціни', sortProperti: '&_order=desc' },
	];

	const selectName = (obj: listType) => {
		dispatch(setSort(obj));
		setOpen(false);
	};

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event as popupClose;
			if (sortRef.current && !_event.path.includes(sortRef.current)) {
				setOpen(false);
			}
		};

		document.body.addEventListener('click', handleClickOutside);
		return () => document.body.removeEventListener('click', handleClickOutside);
	}, []);

	return (
		<div className="rangSort" ref={sortRef}>
			<div className="catalog__select catalog-select">
				<div className="catalog-select__header">
					<div className="catalog-select__text">
						<p>Сортувати:</p>
					</div>
					<div onClick={() => setOpen(!open)} className="catalog-select__header-body">
						<div className="catalog-select__current">
							<p>{sort.name}</p>
						</div>
						<div className="catalog-select__decor"></div>
					</div>
				</div>
				{open && (
					<div className="catalog-select__body">
						<ul>
							{list.map((obj: listType, i: number) => (
								<li
									onClick={() => selectName(obj)}
									key={i}
									className={sort.sortProperti === obj.sortProperti ? 'catalog-select__ikon activ' : 'catalog-select__ikon'}>
									{obj.name}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div onClick={() => setOpen(!open)} className="catalog__sort">
				<div className="catalog__sort-title">
					<h6>sort by:</h6>
				</div>
				<div className="catalog__sort-img">
					<img src={Img} alt="catalog/sort.svg" />
				</div>
				{open && (
					<div className="catalog-select__body">
						<ul>
							{list.map((obj: listType, i: number) => (
								<li
									onClick={() => selectName(obj)}
									key={i}
									className={sort.sortProperti === obj.sortProperti ? 'catalog-select__ikon activ' : 'catalog-select__ikon'}>
									{obj.name}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default SelectRang;
