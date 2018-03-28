import React from 'react';
import styled from 'styled-components';
import ActionButton from '../ActionButton';

const ToDoItemContainer = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  margin: 0;
  padding: 1rem 0;
`;

const ToDoItemDescription = styled.p`
  flex-grow: 1;
  padding: 0 .5rem;
`;

const ToDoItem = () => (
  <ToDoItemContainer>
    <ActionButton icon="check" onClick={() => { console.log('ADD_TODO'); }} />
    <ToDoItemDescription>Lorem Ipsum</ToDoItemDescription>
    <ActionButton icon="edit" onClick={() => { console.log('EDIT_TODO'); }} />
    <ActionButton icon="remove" onClick={() => { console.log('REMOVE_TODO'); }} />
  </ToDoItemContainer>
);

export default ToDoItem;
