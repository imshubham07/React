import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "helloWOrld" }],
  editingTodoId: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    togleEditTodo: (state, action) => {
      state.editingTodoId = action.payload;  
    },
    updateTodo: (state, action) => {
      const {id, text} = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
      state.editingTodoId = null;
    },
  },
});

export const {addTodo, removeTodo, updateTodo,togleEditTodo} = todoSlice.actions

export default todoSlice.reducer