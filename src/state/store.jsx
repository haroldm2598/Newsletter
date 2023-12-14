import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsletter/newsSlicer';

export const store = configureStore({
	reducer: {
		newsTemplate: newsReducer
	}
});
