import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todo-reducers";

const store = configureStore({
  reducer: {
    todo: todosReducer,
  },
});

export default store;
