import { createSlice } from "@reduxjs/toolkit";
import { ITodoStore } from "./interface";

const initialState: ITodoStore = {
  loading: false,
  todoList: [],
};

const TodoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodo: (state) => {
      state.loading = true;
    },
    createTodo: (state, action) => {
      state.loading = true;
      state.todoList.push(action.payload);
    },
  },
});

export const TodoActions = TodoReducer.actions;

export default TodoReducer.reducer;