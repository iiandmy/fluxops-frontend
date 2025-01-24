import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "../shared/api"
import { setupListeners } from "@reduxjs/toolkit/query"
import { rootReducer } from "./root-reducer"

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
  })

  setupListeners(store.dispatch);

  return store;
}

export const appStore = makeStore();

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
