import { createSelector, createSlice } from "@reduxjs/toolkit";

const localTodos = [
  { id: 1, description: "My Todo", isCompleted: false },
  { id: 2, description: "Thisi is another todo", isCompleted: true }
];
const slice = createSlice({
  name: "todos",
  initialState: localTodos,
  reducers: {
    todoCompleted: (todos, action) => {
      let i = todos.findIndex((todo) => todo.id === action.payload);
      const todo = todos[i];
      todo.isCompleted = !todo.isCompleted;
      todos[i] = todo;
    },
    todoAdded: (todos, action) => {
      todos.push(action.payload);
    },
    todoDeleted: (todos, action) => {
      let index = todos.findIndex((todo) => todo.id === action.payload.id);
      todos.splice(index, 1);
      console.log(todos);
    }
  }
});

export const { todoCompleted, todoAdded, todoDeleted } = slice.actions;

/**************** ACTION CREATORS ************************/

export const completeTodo = (id) => (dispatch) => dispatch(todoCompleted(id));

export const addTodo = (description) => (dispatch, getState) => {
  const todo = {
    id: getState().todos.length + 1,
    description: description,
    isCompleted: false
  };
  return dispatch(todoAdded(todo));
};

export const deleteTodo = (id) => (dispatch) => dispatch(todoDeleted(id));

/** Selectors */
export const loadTodos = createSelector(
  (state) => state.todos,
  (todos) => todos
);

export default slice.reducer;
