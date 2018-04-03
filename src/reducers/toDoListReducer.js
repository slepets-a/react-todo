import toDoListActionTypes from '../actions/toDoListActions';

const reducerDefaultState = [
  {
    id: 0,
    text: 'Lorem ipsum',
    isCompleted: false,
  },
  {
    id: 1,
    text: 'Lorem ipsum two',
    isCompleted: false,
  },
  {
    id: 2,
    text: 'Lorem ipsum last',
    isCompleted: true,
  },
];

export default (state = reducerDefaultState, action) => {
  switch (action.type) {
    case toDoListActionTypes.TOGGLE_TODO_STATUS:
      return state.map((toDoItem) => {
        if (toDoItem.id === action.payload.id) {
          return {
            ...toDoItem,
            isCompleted: !toDoItem.isCompleted,
          };
        }
        return toDoItem;
      });
    default:
      return state;
  }
};
