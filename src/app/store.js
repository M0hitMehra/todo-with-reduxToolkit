import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import screenSizeSlice from "../features/todo/screenSizeSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    small: screenSizeSlice,
  },
});
