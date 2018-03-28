import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ActionButtonContainer = styled.button`
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 50%;
  cursor: pointer;
  height: 3.125rem;
  width: 3.125rem;
  
  &:not(:last-of-type) {
    margin-right: .5rem;
  }
`;

const ActionButton = (props) => {
  const {
    onClick,
  } = props;
  let icon;
  switch (props.icon) {
    case 'check':
      icon = <i className="fa fa-check" />;
      break;
    case 'edit':
      icon = <i className="fa fa-edit" />;
      break;
    case 'remove':
      icon = <i className="fa fa-trash-alt" />;
      break;
    default:
      icon = <i className="fa fa-check" />;
  }
  return (
    <ActionButtonContainer onClick={onClick}>
      {icon}
    </ActionButtonContainer>
  );
};

ActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;
