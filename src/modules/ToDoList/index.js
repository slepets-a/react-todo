import React from 'react';
import styled from 'styled-components';
import ToDoItem from '../ToDoItem';

const ToDoListContainer = styled.div`
  padding: 1rem 0;
`;

const ToDoList = () => (
  <ToDoListContainer>
    <ToDoItem />
    <ToDoItem />
    <ToDoItem />
  </ToDoListContainer>
);

export default ToDoList;
