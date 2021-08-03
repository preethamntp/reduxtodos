import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  todoList: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
       state.todoList.map(item => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
    setDelete: (state, action) => {
      let ind = state.todoList.findIndex(function (element) {
        return action.payload === element.id;
      })
      if (ind !== -1) {
        state.todoList.splice(ind, 1)
      }
    }
  }
});

export const {
  saveTodo,
  setCheck,
  setDelete
} = todoSlice.actions;

export const selectTodoList = state => state.todos.todoList;

export default todoSlice.reducer;
