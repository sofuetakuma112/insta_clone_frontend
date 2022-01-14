import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/post/postSlice";

// configureStore関数でsliceをstoreに登録する
export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});

// useDispatchを格納する変数に型を指定する必要があるため定義する
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
