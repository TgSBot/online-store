import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sortPostsShoes from './reducers/SortPostsShoes';
import allPosts from './reducers/AllPosts';

const rootReducer = combineReducers({
	sortPostsShoes,
	allPosts,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
