import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '~/api';

import { clientSlice } from './clients';
import { sessionSlice } from './session';
import { themeSlice } from './theme';

export const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	[clientSlice.reducerPath]: clientSlice.reducer,
	[sessionSlice.reducerPath]: sessionSlice.reducer,
	[themeSlice.reducerPath]: themeSlice.reducer,
});
