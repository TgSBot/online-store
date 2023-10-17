import { createSlice } from '@reduxjs/toolkit';

type Page = {
	thisPage: number;
	maxPage: number;
};

interface InitialState {
	allTypeShoes: string[];
	page: Page;
	sizeShoes: string;
}

const initialState: InitialState = {
	allTypeShoes: [],
	page: { thisPage: 1, maxPage: 3 },
	sizeShoes: '',
};

export const sliceIndividualShoes = createSlice({
	name: 'typeShoes',
	initialState,
	reducers: {
		changeTypeShoes(state, action) {
			state.allTypeShoes.push(action.payload);
		},
		changePage(state) {
			state.page.thisPage += 1;
		},
		changeSizeShoes(state, action) {
			state.sizeShoes = action.payload;
		},
	},
});

export default sliceIndividualShoes.reducer;
