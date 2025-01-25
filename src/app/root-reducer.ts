import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../shared/api";
import { sessionSlice } from "@/entities/session";
import { clientSlice } from "@/entities/client";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [clientSlice.reducerPath]: clientSlice.reducer,
  [sessionSlice.reducerPath]: sessionSlice.reducer,
});