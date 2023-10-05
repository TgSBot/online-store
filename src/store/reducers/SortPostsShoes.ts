import { createSlice } from '@reduxjs/toolkit';

interface ISort {
	minPrice: number;
	maxPrice: number;
	stateMaxPrice: number;
	male: boolean;
	female: boolean;
	sizeShoes: number | undefined;
	defaultVelues: boolean;
	page: PagePost;
}

type PagePost = {
	start: number;
	end: number;
};

const initialState: ISort = {
	minPrice: 0,
	maxPrice: 0,
	stateMaxPrice: 10000,
	male: false,
	female: false,
	sizeShoes: undefined,
	defaultVelues: false,
	page: {
		start: 9,
		end: 18,
	},
};

export const sortSliceShoes = createSlice({
	name: 'sortPostsShoes',
	initialState,
	reducers: {
		changeMinimumPrice(state, action) {
			state.minPrice = Math.ceil((state.stateMaxPrice * action.payload) / 100);
		},
		changeMaximumPrice(state, action) {
			state.maxPrice = Math.ceil((state.stateMaxPrice * action.payload) / 100);
		},
		changeGenderFemale(state, action) {
			if (state.male === true) {
				state.male = false;
				state.female = action.payload;
			} else {
				state.female = action.payload;
			}
		},
		changeGenderMale(state, action) {
			if (state.female === true) {
				state.female = false;
				state.male = action.payload;
			} else {
				state.male = action.payload;
			}
		},
		changeSizeShoes(state, action) {
			state.sizeShoes = action.payload;
		},
		changeStateDefault(state) {
			state.female = false;
			state.male = false;
			state.maxPrice = state.stateMaxPrice;
			state.minPrice = 0;
			state.sizeShoes = undefined;
			state.defaultVelues = true;
		},
		changeDefaultVelues(state, action) {
			state.defaultVelues = action.payload;
		},
		changePrice(state, action) {
			state.maxPrice = Math.ceil(action.payload[1]);
			state.stateMaxPrice = Math.ceil(action.payload[1]);
		},
		changePagePost(state) {
			state.page.start += 9;
			state.page.end += 9;
		},
		changeDefaultStatePagePost(state) {
			state.page.start = 9;
			state.page.end = 18;
		},
	},
});

export default sortSliceShoes.reducer;
