import { createSlice } from '@reduxjs/toolkit';

interface IPosts {
	id: number;
	image: string;
	name: string;
	description: string;
	net_price: number;
	price: string;
	gender: string;
	rating: number;
	productAvailability: number;
	size: number;
	tags: string[];
}

interface IAllPosts {
	allPosts: [IPosts] | [];
	selectedPosts: [IPosts] | [];
	price: [];
	loading: boolean;
	error: boolean;
}

const initialState: IAllPosts = {
	allPosts: [],
	selectedPosts: [],
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
		changeSelectedPosts(state, action) {
			state.selectedPosts = action.payload;
		},
	},
});

export default sliceAllPosts.reducer;
