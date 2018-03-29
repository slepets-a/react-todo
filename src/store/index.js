import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import toDoListReducer from '../reducers/toDoListReducer';
import filterReducer from '../reducers/filterReducer';

const configureStore = () => createStore(
  combineReducers({
    toDoList: toDoListReducer,
    filter: filterReducer,
  }),
  devToolsEnhancer({
    name: 'ToDo List',
  }),
);

export default configureStore;
