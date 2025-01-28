import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseApi } from '~/api';

import { rootReducer } from './root-reducer';

const a = 5;

export const makeStore = () => {
	const store = configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(baseApi.middleware),
	});

	setupListeners(store.dispatch);

	return store;
};

export const appStore = makeStore();

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
