import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ToDoItem from '../ToDoItem';

const ToDoListContainer = styled.div`
  padding: 1rem 0;
`;

const ToDoList = ({ toDoList }) => (
  <ToDoListContainer>
    {
      toDoList.map(toDoItem => <ToDoItem key={toDoItem.id} {...toDoItem} />)
    }
  </ToDoListContainer>
);

ToDoList.propTypes = {
  toDoList: PropTypes.array.isRequired,
};

export default ToDoList;
