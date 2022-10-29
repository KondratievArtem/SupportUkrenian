import { configureStore } from '@reduxjs/toolkit';
import Filters from './slice/FilterSlice';
import Bascket from './slice/BascketSlice';
import goods from './slice/fetchGoodsSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
	reducer: {
		Filters,
		Bascket,
		goods,
	},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
