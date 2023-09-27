import { createSlice } from '@reduxjs/toolkit';
import { maxPrice } from '../../assets/list/PostsCatalog';

interface ISort {
	minPrice: number;
	maxPrice: number;
	stateMaxPrice: number;
	male: boolean;
	female: boolean;
	sizeShoes: number | undefined;
}

const initialState: ISort = {
	minPrice: 0,
	maxPrice: maxPrice,
	stateMaxPrice: maxPrice,
	male: false,
	female: false,
	sizeShoes: undefined,
};

export const sortSliceShoes = createSlice({
	name: 'sortPostsShoes',
	initialState,
	reducers: {
		changeMinimumPrice(state, action) {
			state.minPrice = (state.stateMaxPrice * action.payload) / 100;
		},
		changeMaximumPrice(state, action) {
			state.maxPrice = (state.stateMaxPrice * action.payload) / 100;
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
			state.maxPrice = maxPrice;
			state.minPrice = 0;
			state.sizeShoes = undefined;
			state.stateMaxPrice = maxPrice;
		},
	},
});

export default sortSliceShoes.reducer;
