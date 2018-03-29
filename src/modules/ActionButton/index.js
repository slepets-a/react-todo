import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';

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
      icon = <FontAwesomeIcon icon={faCheck} />;
      break;
    case 'edit':
      icon = <FontAwesomeIcon icon={faEdit} />;
      break;
    case 'remove':
      icon = <FontAwesomeIcon icon={faTrash} />;
      break;
    default:
      icon = <FontAwesomeIcon icon={faCheck} />;
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
