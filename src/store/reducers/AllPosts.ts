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
	sizeShoes: number;
	tags: string[];
}

interface IAllPosts {
	allPosts: [IPosts] | [];
	selectedPosts: [IPosts] | [];
	price: [];
	filteredPosts: [IPosts] | [];
	sorted: boolean;
	defaultValue: boolean;
	loading: boolean;
	error: boolean;
}

const initialState: IAllPosts = {
	allPosts: [],
	selectedPosts: [],
	price: [],
	filteredPosts: [],
	sorted: false,
	defaultValue: false,
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
		changeStatusDefaultValue(state, action) {
			state.defaultValue = action.payload;
		},
		changeFilteredPosts(state, action) {
			state.filteredPosts = action.payload;
			state.sorted = true;
		},
		changeStatusSortedPosts(state) {
			state.sorted = false;
		},
	},
});

export default sliceAllPosts.reducer;
