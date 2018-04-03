import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import ToDoList from '../ToDoList';
import AddToDoButton from '../AddToDoButton';

const ToDoContainer = styled.div`
  background-color: white;
  border-radius: .25rem;
  box-shadow: 0 0 .25rem rgba(0,0,0,.1);
  flex: 1 1 auto;
  padding: 1rem;
  margin: 0 auto;
  max-width: 500px;
`;

export const ToDo = ({ toDoList }) => (
  <ToDoContainer>
    <Header />
    <ToDoList toDoList={toDoList} />
    <AddToDoButton />
  </ToDoContainer>
);

const mapStateToProps = state => ({
  ...state,
});

ToDo.propTypes = {
  toDoList: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(ToDo);
