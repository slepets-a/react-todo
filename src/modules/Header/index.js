import React from 'react';
import FilterLink from '../FilterLink';

const Header = () => (
  <header>
    <h1>ToDo App</h1>
    <nav>
      <FilterLink text="View All" />
      <FilterLink text="Active" />
      <FilterLink text="Completed" />
    </nav>
  </header>
);

export default Header;
