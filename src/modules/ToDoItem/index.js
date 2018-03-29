import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const ToDoItem = ({ isCompleted, text }) => (
  <ToDoItemContainer>
    <ActionButton icon="check" checked={isCompleted} onClick={() => { console.log('ADD_TODO'); }} />
    <ToDoItemDescription>{text}</ToDoItemDescription>
    <ActionButton icon="edit" onClick={() => { console.log('EDIT_TODO'); }} />
    <ActionButton icon="remove" onClick={() => { console.log('REMOVE_TODO'); }} />
  </ToDoItemContainer>
);

ToDoItem.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ToDoItem;
