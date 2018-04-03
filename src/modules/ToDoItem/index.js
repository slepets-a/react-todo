import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ActionButton from '../ActionButton';
import { toggleToDoStatus } from '../../actions/toDoListActions';

const ToDoItemContainer = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  margin: 0;
  padding: 1rem 0;
`;

const ToDoItemDescription = styled.p`
  flex-grow: 1;
  padding: 0 .5rem;
  text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
`;

export const ToDoItem = ({
  isCompleted,
  id,
  text,
  onToggleClick,
}) => (
  <ToDoItemContainer>
    <ActionButton icon="check" onClick={() => { onToggleClick(id); }} />
    <ToDoItemDescription isCompleted={isCompleted}>{text}</ToDoItemDescription>
    <ActionButton icon="edit" onClick={() => { console.log('EDIT_TODO'); }} />
    <ActionButton icon="remove" onClick={() => { console.log('REMOVE_TODO'); }} />
  </ToDoItemContainer>
);

ToDoItem.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onToggleClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onToggleClick: (id) => {
    dispatch(toggleToDoStatus(id));
  },
});

export default connect(null, mapDispatchToProps)(ToDoItem);
