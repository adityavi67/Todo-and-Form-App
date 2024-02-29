import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload.text });
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToEdit = state.find(todo => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = newText;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default configureStore({
  reducer: todoSlice.reducer,
});
