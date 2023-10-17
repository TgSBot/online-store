import { createSlice } from '@reduxjs/toolkit';

type Form = {
	name: string;
	phoneNumber: string;
};

interface InitialState {
	form: Form;
}

const initialState: InitialState = {
	form: { name: '', phoneNumber: '' },
};

export const sliceConnectUs = createSlice({
	name: 'connectUs',
	initialState,
	reducers: {
		changeForm(state, action) {
			state.form.name = action.payload.name;
			state.form.phoneNumber = action.payload.phoneNumber;
		},
	},
});

export default sliceConnectUs.reducer;
