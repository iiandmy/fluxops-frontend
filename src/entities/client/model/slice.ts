import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Client } from "./types";
import { RootState } from "../../../app/app-store";
import { clientApi } from "../api/client-api";
import { mapClient } from "../lib/map-client";

type ClientSliceState = {
  connections: Client[]
};

const initialState: ClientSliceState = {
  connections: []
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
    }
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
    )
  }
})

export const selectClients = (state: RootState) => state.clients;

export const {
  clearClients,
  setClients,
  addClient,
} = clientSlice.actions;