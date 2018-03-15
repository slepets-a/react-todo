import React from 'react';
import PropTypes from 'prop-types';

const FilterLink = props => (
  <button>{props.text}</button>
);

FilterLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FilterLink;
