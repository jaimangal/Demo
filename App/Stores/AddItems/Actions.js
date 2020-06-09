export const ADD_TODO_LIST = "OTP_SESSION_ID";
export const ADD_COMPLETED_LIST = "ADD_COMPLETED_LIST";

export const setTodoList = items => {
  return {
    type: ADD_TODO_LIST,
    todoList: items
  };
};

export const setCompletedList = items => {
  return {
    type: ADD_COMPLETED_LIST,
    completedItems: items
  };
};
