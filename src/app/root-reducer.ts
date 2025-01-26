import { combineReducers } from '@reduxjs/toolkit';

import { clientSlice } from '@/entities/client';
import { sessionSlice } from '@/entities/session';

import { baseApi } from '../shared/api';

export const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	[clientSlice.reducerPath]: clientSlice.reducer,
	[sessionSlice.reducerPath]: sessionSlice.reducer,
});
