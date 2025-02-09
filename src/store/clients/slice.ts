import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { clientApi } from '~/api/client';

import { RootState } from '~/store';

import { env } from '~/lib';

import { __mockClients_ } from './__mock__';
import { Client } from './types';

type ClientSliceState = {
	connections: Client[];
};

const initialState: ClientSliceState = {
	connections: [],
};

export const clientSlice = createSlice({
	name: 'clients',
	initialState,
	reducers: {
		clearClients: (state) => {
			state.connections = [];
		},
		setClients: (state, action: PayloadAction<Client[]>) => {
			state.connections = action.payload;
		},
		addClient: (state, action: PayloadAction<Client>) => {
			state.connections.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			clientApi.endpoints.fetchClients.matchFulfilled,
			(state: ClientSliceState, { payload }) => {
				state.connections = [];

				payload.forEach((client) => {
					state.connections.push(client);
				});
			}
		);
	},
});

export const selectClients = (state: RootState) =>
	env.VITE_USE_MOCKS ? __mockClients_ : state.clients;

export const selectTotalClients = (state: RootState) =>
	state.clients.connections.length;

export const selectTotalActiveClients = (state: RootState) =>
	state.clients.connections.filter(
		(connection) => connection.status === 'active'
	).length;

export const selectTotalInactiveClients = (state: RootState) =>
	state.clients.connections.filter(
		(connection) => connection.status === 'inactive'
	).length;

export const { clearClients, setClients, addClient } = clientSlice.actions;
