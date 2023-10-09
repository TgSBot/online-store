import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sortPostsShoes from './reducers/SortPostsShoes';
import allPosts from './reducers/AllPosts';
import PopUp from './reducers/PopUp';
import BasketPopUp from './reducers/BasketPopUp';
import OrderRegistration from './reducers/OrderRegistration';

const rootReducer = combineReducers({
	BasketPopUp,
	sortPostsShoes,
	allPosts,
	PopUp,
	OrderRegistration,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
