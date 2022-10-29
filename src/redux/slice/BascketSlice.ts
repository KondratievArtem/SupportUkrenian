import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getDataLS from '../../utilit/getDataLS';

export type itemType = {
	id: string;
	tegline: string;
	type: string;
	color: string;
	inStock: number;
	price: number;
	size: string;
	imges: string;
	count: number;
};

interface bascketType {
	item: itemType[];
}

const initialState: bascketType = {
	item: getDataLS(),
};

const BascketSlice = createSlice({
	name: 'Bascket',
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<itemType>) {
			const findItem = state.item.find((item) => item.id === action.payload.id);
			if (findItem) {
				findItem.count++;
			} else {
				state.item.push({ ...action.payload, count: 1 });
			}
		},
		minusItem(state, action: PayloadAction<itemType>) {
			const findItem = state.item.find((item) => item.id === action.payload.id);
			if (!findItem) return;
			if (findItem.count <= 1) {
				const findIndex = state.item.findIndex((index) => index.id === findItem.id);
				state.item.splice(findIndex, 1);
			} else {
				findItem.count--;
			}
		},
		remuveItem(state, action: PayloadAction<itemType>) {
			const findItem = state.item.find((item) => item.id === action.payload.id);
			if (!findItem) return;
			const findIndex = state.item.findIndex((index) => index.id === findItem.id);
			state.item.splice(findIndex, 1);
		},
		saveItem(state, action: PayloadAction<bascketType>) {
			state.item = action.payload.item;
		},
	},
});

export const { addItem, minusItem, remuveItem, saveItem } = BascketSlice.actions;

export default BascketSlice.reducer;
