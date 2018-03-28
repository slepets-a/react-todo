import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterLinkContainer = styled.div`
  flex: 1 1 auto;
  padding: 0 1rem;
`;

const FilterButton = styled.button`
  background-color: ${props => (props.isActive ? '#1cc5ec' : 'rgba(255,255,255,.08)')};
  border: 1px solid #1cc5ec;
  border-radius: 3px;
  box-shadow: ${props => (props.isActive ? '0 12px 20px -10px rgba(28, 197, 236, .28), 0 4px 20px 0 rgba(28, 197, 236, .12), 0 7px 8px -5px rgba(28, 197, 236, .2)' : 'none')};
  color: ${props => (props.isActive ? 'white' : '#1cc5ec')};
  cursor: pointer;
  font-weight: lighter;
  padding: .5rem;
  transition: background-color .25s ease-in-out,
              color .25s ease-in-out,
              box-shadow .25s ease-in-out;
  text-decoration: none;
  width: 100%;
  
  &:hover {
    box-shadow: ${props => (
    props.isActive ?
      '0 12px 20px -10px rgba(28, 197, 236, .28), 0 4px 20px 0 rgba(28, 197, 236, .12), 0 7px 8px -5px rgba(28, 197, 236, .2)' :
      '0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)'
  )};
  }
`;

const FilterLink = props => (
  <FilterLinkContainer>
    <FilterButton isActive={props.isActive}>{props.text}</FilterButton>
  </FilterLinkContainer>
);

FilterLink.propTypes = {
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default FilterLink;
