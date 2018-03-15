import React from 'react';
import Header from '../Header';
import ToDoList from '../ToDoList';
import AddToDoButton from '../AddToDoButton';

const ToDo = () => (
  <div className="ToDo">
    <Header />
    <ToDoList />
    <AddToDoButton />
  </div>
);

export default ToDo;
