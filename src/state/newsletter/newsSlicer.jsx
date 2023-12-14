import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [
		{ details: 'Product discovery and building what matters' },
		{ details: 'Measuring to ensure updates are a success' },
		{ details: 'And much more!' }
	],
	hasError: false,
	inputValue: ''
};

const newsSlice = createSlice({
	name: 'newSlicer',
	initialState,
	reducers: {
		inputChange: (state, action) => {
			state.inputValue = action.payload;
		},
		submitChange: (state) => {
			const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

			if (!isValidEmail(state.inputValue)) {
				state.hasError = true;
				console.log("sorry your email isn't valid");
			} else {
				state.hasError = false;
				document.getElementById('successBtn').showModal();
			}
		}
	}
});

export const { inputChange, submitChange } = newsSlice.actions;

export default newsSlice.reducer;
