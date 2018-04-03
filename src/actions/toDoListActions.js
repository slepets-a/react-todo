const toDoListActionTypes = {
  CREATE_TODO: 'CREATE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO_STATUS: 'TOGGLE_TODO_STATUS',
};

export const createToDo = ({ id, text, isCompleted }) => ({
  type: toDoListActionTypes.CREATE_TODO,
  payload: {
    id,
    text,
    isCompleted,
  },
});

export const updateToDo = ({ id, text }) => ({
  type: toDoListActionTypes.UPDATE_TODO,
  payload: {
    id,
    text,
  },
});

export const deleteToDo = id => ({
  type: toDoListActionTypes.DELETE_TODO,
  payload: {
    id,
  },
});

export const toggleToDoStatus = id => ({
  type: toDoListActionTypes.TOGGLE_TODO_STATUS,
  payload: {
    id,
  },
});

export default toDoListActionTypes;
