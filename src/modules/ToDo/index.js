import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import ToDoList from '../ToDoList';
import AddToDoButton from '../AddToDoButton';

const ToDoContainer = styled.div`
  background-color: white;
  border-radius: .25rem;
  box-shadow: 0 0 .25rem rgba(0,0,0,.1);
  flex: 1 1 auto;
  padding: .5rem;
  margin: 0 auto;
  max-width: 500px;
`;

const ToDo = () => (
  <ToDoContainer>
    <Header />
    <ToDoList />
    <AddToDoButton />
  </ToDoContainer>
);

export default ToDo;
