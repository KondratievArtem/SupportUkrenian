import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type goodsType = {
	id: string;
	type: string;
	tegline: string;
	color: string;
	size: string[];
	imges: string;
	inStock: number;
	price: number;
};

interface goodsInType {
	goodsState: goodsType[];
	loading: 'pending' | 'fulfilled' | 'rejected';
}

const initialState = {
	goodsState: [],
	loading: 'pending',
} as goodsInType;

export const fetchGoods = createAsyncThunk<goodsType[], { linck: string; sort: { name: string; sortProperti: string }; curentPag: number }>(
	'goodsState/fetchGoods',
	async (params) => {
		const { linck, sort, curentPag } = params;
		const { data } = await axios.get<goodsType[]>(`http://localhost:3050/goods?_sort=price${sort.sortProperti}&_page=${curentPag}&_limit=6${linck}`);
		return data;
	}
);

const goodsSlice = createSlice({
	name: 'goods',
	initialState,

	reducers: {
		setGoodsState(state, action) {
			state.goodsState = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchGoods.pending, (state) => {
			state.loading = 'pending';
			state.goodsState = [];
		});
		builder.addCase(fetchGoods.fulfilled, (state, action: PayloadAction<goodsType[]>) => {
			state.goodsState = action.payload;
			state.loading = 'fulfilled';
		});
		builder.addCase(fetchGoods.rejected, (state) => {
			state.loading = 'rejected';
			state.goodsState = [];
		});
	},
});

export default goodsSlice.reducer;
