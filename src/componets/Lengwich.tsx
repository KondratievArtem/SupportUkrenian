import ImgUK from '../assets/img/header/ukraine.svg';
import ImgPL from '../assets/img/header/poland.svg';
import ImgEN from '../assets/img/header/britan.svg';
import { setLen } from '../redux/slice/FilterSlice';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';

type langType = { img: string; len: string };
type popupClose = MouseEvent & {
	path: Node[];
};

const listLang: langType[] = [
	{ img: ImgUK, len: 'UA' },
	{ img: ImgPL, len: 'PL' },
	{ img: ImgEN, len: 'EN' },
];

function Leng() {
	const [activ, setActiv] = React.useState<boolean>(false);
	const { len } = useSelector((state: RootState) => state.Filters);
	const lenRef = React.useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();

	function open() {
		setActiv((visabiliti) => !visabiliti);
	}

	const HandleClickLen = (obj: langType) => {
		dispatch(setLen(obj));
		setActiv(false);
	};

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event as popupClose;
			if (lenRef.current && !_event.path.includes(lenRef.current)) {
				setActiv(false);
			}
		};
		document.body.addEventListener('click', handleClickOutside);
	}, []);

	return (
		<div className={activ === true ? 'box-menu__select activ' : 'box-menu__select'} ref={lenRef}>
			<div className="box-menu__header" onClick={open}>
				<div className="box-menu__current">
					<div className="box-menu__img">
						<img src={len.img} alt={len.len} />
					</div>
					<div className="box-menu__len">
						<p>{len.len}</p>
					</div>
				</div>
				<div className="box-menu__line"></div>
			</div>
			<div className="box-menu__body">
				{listLang.map((obj: langType, i: number) => (
					<div className="box-menu__item" key={i} onClick={() => HandleClickLen(obj)}>
						<div className="box-menu__img">
							<img src={obj.img} alt={obj.len} />
						</div>
						<div className="box-menu__len">
							<p>{obj.len}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Leng;
