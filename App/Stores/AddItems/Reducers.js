import {
  setTodoList,
  setCompletedList,
  ADD_TODO_LIST,
  ADD_COMPLETED_LIST
} from "./Actions";

export const setItemsProps = items => {
  return dispatch => {
    dispatch(setTodoList(items));
  };
};

export const setCompletedItemsProps = items => {
  return dispatch => {
    dispatch(setCompletedList(items));
  };
};

const ACTION_HANDLERS = {
  [ADD_TODO_LIST]: (state, action) => ({
    ...state,
    todoList: action.todoList
  }),

  [ADD_COMPLETED_LIST]: (state, action) => ({
    ...state,
    completedItems: action.completedItems
  }),

};

const initialState = {
  todoList: null,
  completedItems: null
};

export function todoReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
