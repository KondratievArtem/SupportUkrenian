import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ImgUK from '../../assets/img/header/ukraine.svg';

export type setFilterType = {
	sort: { name: string; sortProperti: string };
	curentPag: number;
};

export interface filterInit {
	catalogId: string[];
	sort: { name: string; sortProperti: string };
	curentPag: number;
	openFiltr: boolean;
	len: { img: string; len: string };
}

const initialState: filterInit = {
	catalogId: [],
	sort: {
		name: 'По зростанню ціни',
		sortProperti: '&_order=asc',
	},
	curentPag: 1,
	openFiltr: false,
	len: { img: ImgUK, len: 'UA' },
};

const FilterSlice = createSlice({
	name: 'Filters',
	initialState,
	reducers: {
		setOpenFiltr(state, action: PayloadAction<boolean>) {
			state.openFiltr = action.payload;
		},
		setCatalogId(state, action: PayloadAction<string>) {
			const findeCatalog = state.catalogId.find((item) => item === action.payload);
			if (!findeCatalog) {
				state.catalogId.push(action.payload);
			} else {
				const findeArr = state.catalogId.findIndex((item) => item === findeCatalog);
				state.catalogId.splice(findeArr, 1);
			}
		},
		clearCatalog(state) {
			state.catalogId = [];
		},
		setSort(state, action: PayloadAction<{ name: string; sortProperti: string }>) {
			state.sort = action.payload;
		},
		setCurentPag(state, action: PayloadAction<number>) {
			state.curentPag = action.payload;
		},
		setFilters(state, action: PayloadAction<setFilterType>) {
			state.sort = action.payload.sort;
			state.curentPag = action.payload.curentPag;
		},
		setLen(state, action: PayloadAction<{ img: string; len: string }>) {
			state.len = action.payload;
		},
	},
});

export const { setCatalogId, setSort, setCurentPag, setFilters, clearCatalog, setOpenFiltr, setLen } = FilterSlice.actions;

export default FilterSlice.reducer;
