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
    default:
      return state;
  }
};
