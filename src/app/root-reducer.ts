import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../shared/api";
import { clientSlice } from "../entities/client/model/slice";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [clientSlice.reducerPath]: clientSlice.reducer,
});