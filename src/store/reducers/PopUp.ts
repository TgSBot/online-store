import { createSlice } from '@reduxjs/toolkit';
import { IPosts } from './AllPosts';

interface IPopUp {
	image: File | undefined;
	active: boolean;
	post: IPosts | undefined;
}

const initialState: IPopUp = {
	image: undefined,
	active: false,
	post: undefined,
};

export const slicePopUp = createSlice({
	name: 'popUp',
	initialState,
	reducers: {
		changeImage(state, action) {
			state.image = action.payload;
		},
		changeActivePopUp(state, action) {
			state.active = action.payload;
		},
		changePost(state, action) {
			state.post = action.payload;
		},
	},
});

export default slicePopUp.reducer;
