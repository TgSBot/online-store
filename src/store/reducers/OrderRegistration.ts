import { createSlice } from '@reduxjs/toolkit';

interface InitialState extends PurchaseOrder {
	status: boolean;
}

type PurchaseOrder = {
	name: string | undefined;
	phoneNumber: string | undefined;
	email: string | undefined;
};

const initialState: InitialState = {
	status: false,
	name: undefined,
	phoneNumber: undefined,
	email: undefined,
};

export const sliceOrderRegistration = createSlice({
	name: 'orderRegistration',
	initialState,
	reducers: {
		changeStatus(state, action) {
			state.status = action.payload;
		},
		changePurchaseOrder(state, action) {
			state.name = action.payload.name;
			state.phoneNumber = action.payload.phoneNumber;
			state.email = action.payload.email;
		},
	},
});

export default sliceOrderRegistration.reducer;
