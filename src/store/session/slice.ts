import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/store';

import { sessionApi } from '~/api/session';

interface ISessionSliceState {
	isAuthorized: boolean;
	accessToken?: string;
	userId?: string;
}

const initialState: ISessionSliceState = {
	isAuthorized: false,
	accessToken: '',
	userId: '',
};

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		clearSessionData: (state) => {
			state.isAuthorized = false;
			state.accessToken = undefined;
			state.userId = undefined;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			sessionApi.endpoints.login.matchFulfilled,
			(state: ISessionSliceState, { payload }) => {
				state.isAuthorized = true;

				state.userId = payload.userId;
				state.accessToken = payload.accessToken;
			}
		);
	},
});

// TODO: Mock while no auth on server side
export const selectIsAuthorized = (_: RootState) => true;

export const selectUserId = (state: RootState) => state.session.userId;

export const { clearSessionData } = sessionSlice.actions;
