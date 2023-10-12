import { createSlice } from '@reduxjs/toolkit';

type Page = {
	thisPage: number;
	maxPage: number;
};

interface InitialState {
	allTypeShoes: string[];
	page: Page;
}

const initialState: InitialState = {
	allTypeShoes: [],
	page: { thisPage: 1, maxPage: 3 },
};

export const sliceIndividualShoes = createSlice({
	name: 'typeShoes',
	initialState,
	reducers: {
		changeTypeShoes(state, action) {
			// if (typeof action.payload === Object) {
			// }
			state.allTypeShoes.push(action.payload);
			state.allTypeShoes = state.allTypeShoes.flat();
			const uniqueType = new Set(state.allTypeShoes);
			state.allTypeShoes = Array.from(uniqueType);
		},
		changePage(state) {
			state.page.thisPage += 1;
		},
	},
});

export default sliceIndividualShoes.reducer;
