import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";
import { coinbaseApi } from "../apis/coinbase.api";
import { userApi } from "../apis/user.api";
import auth from "../slices/auth.slice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [coinbaseApi.reducerPath]: coinbaseApi.reducer,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(authApi.middleware)
      .concat(coinbaseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
