import { createSlice } from '@reduxjs/toolkit';

interface IPosts {
	id: number;
	image: string;
	name: string;
	description: string;
	net_price: number;
	price: string;
	tags: string[];
}

interface IAllPosts {
	allPosts: [IPosts] | [];
	price: [];
	loading: boolean;
	error: boolean;
}

const initialState: IAllPosts = {
	allPosts: [],
	price: [],
	loading: false,
	error: false,
};

export const sliceAllPosts = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		changePosts(state, action) {
			state.allPosts = action.payload;
		},
		changeLoadingPosts(state, action) {
			state.loading = action.payload;
		},
		changeStatusError(state, action) {
			state.error = action.payload;
		},
	},
});

export default sliceAllPosts.reducer;
