import { createSlice } from '@reduxjs/toolkit';

interface ISort {
	minPrice: number;
	maxPrice: number;
	stateMaxPrice: number;
	male: boolean;
	female: boolean;
	sizeShoes: number | undefined;
	defaultVelues: boolean;
}

const initialState: ISort = {
	minPrice: 0,
	maxPrice: 0,
	stateMaxPrice: 10000,
	male: false,
	female: false,
	sizeShoes: undefined,
	defaultVelues: false,
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
			state.maxPrice = 10000;
			state.minPrice = 0;
			state.sizeShoes = undefined;
			state.stateMaxPrice = 10000;
			state.defaultVelues = true;
		},
		changeDefaultVelues(state, action) {
			state.defaultVelues = action.payload;
		},
		changePrice(state, action) {
			state.maxPrice = Math.ceil(action.payload[1]);
			state.stateMaxPrice = Math.ceil(action.payload[1]);
		},
	},
});

export default sortSliceShoes.reducer;
