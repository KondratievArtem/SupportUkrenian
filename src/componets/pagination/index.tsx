import ReactPaginate from 'react-paginate';

import styile from './pagination.module.scss';
import { setCurentPag } from '../../redux/slice/FilterSlice';
import { useAppDispatch } from '../../redux/store';

const Pagination: React.FC = () => {
	const dispatch = useAppDispatch();
	return (
		<>
			<ReactPaginate
				className={styile.root}
				breakLabel="..."
				nextLabel=">"
				onPageChange={(event) => dispatch(setCurentPag(event.selected + 1))}
				pageRangeDisplayed={1}
				pageCount={3}
				// forcePage={curentPag}
				previousLabel="<"
			/>
		</>
	);
};

export default Pagination;
