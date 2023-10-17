import { createSlice } from '@reduxjs/toolkit';

type Page = {
	thisPage: number;
	maxPage: number;
};

type Form = {
	name: string;
	email: string;
};

interface InitialState {
	allTypeShoes: string[];
	page: Page;
	sizeShoes: string[];
	individualWishes: string;
	form: Form;
}

const initialState: InitialState = {
	allTypeShoes: [],
	page: { thisPage: 1, maxPage: 3 },
	sizeShoes: [],
	individualWishes: '',
	form: { name: '', email: '' },
};

export const sliceIndividualShoes = createSlice({
	name: 'typeShoes',
	initialState,
	reducers: {
		changePage(state) {
			state.page.thisPage += 1;
		},
		changeSizeShoes(state, action) {
			state.sizeShoes.push(action.payload);
		},
		deleteSizeShoesInArray(state, action) {
			const index = state.sizeShoes.indexOf(action.payload);
			if (index !== -1)
				state.sizeShoes.filter((type) => {
					if (type === String(state.sizeShoes.splice(index, 1))) return false;
					return true;
				});
		},
		changeTypeShoes(state, action) {
			state.allTypeShoes.push(action.payload);
		},
		deleteTypeShoesInArray(state, action) {
			const index = state.allTypeShoes.indexOf(action.payload);
			if (index !== -1)
				state.allTypeShoes.filter((type) => {
					if (type === String(state.allTypeShoes.splice(index, 1)))
						return false;
					return true;
				});
		},
		changeIndividualWishes(state, action) {
			state.individualWishes = action.payload;
		},
		changeFormSending(state, action) {
			state.form.name = action.payload.name;
			state.form.email = action.payload.email;
		},
	},
});

export default sliceIndividualShoes.reducer;
