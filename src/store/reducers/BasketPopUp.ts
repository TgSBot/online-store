import { createSlice } from '@reduxjs/toolkit';
import { IPosts } from './AllPosts';

interface InitialState {
	active: boolean;
	postBasket: [IPosts] | [];
	countPurchases: number;
}

const initialState: InitialState = {
	active: false,
	postBasket: [],
	countPurchases: 0,
};

export const sliceBasketPopUp = createSlice({
	name: 'basketPopUp',
	initialState,
	reducers: {
		changeStatusActive(state, action) {
			state.active = action.payload;
		},
		changePostBasket(state, action) {
			state.postBasket.splice(0, 0, action.payload);
			state.countPurchases += 1;
		},
		deletePost(state, action) {
			state.postBasket = action.payload;
			state.countPurchases -= 1;
		},
	},
});

export default sliceBasketPopUp.reducer;
