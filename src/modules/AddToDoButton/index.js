import React from 'react';
import styled from 'styled-components';

const AddToDoButtonContainer = styled.button`
  background-color: #ff5562;
  border: 0;
  border-radius: 50%;
  bottom: 1.5rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: normal;
  height: 3.125rem;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 3.125rem;
`;

const AddToDoButton = () => (
  <AddToDoButtonContainer>
    <i className="fa fa-plus-square" />
  </AddToDoButtonContainer>
);

export default AddToDoButton;
