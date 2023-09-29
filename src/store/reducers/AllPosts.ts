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
}

const initialState: IAllPosts = {
	allPosts: [],
	price: [],
	loading: false,
};

export const sliceAllPosts = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		changePosts(state, action) {
			state.allPosts = action.payload;
		},
	},
});

export default sliceAllPosts.reducer;
