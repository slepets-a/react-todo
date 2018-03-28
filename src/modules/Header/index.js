import React from 'react';
import styled from 'styled-components';
import FilterLink from '../FilterLink';

const HeaderTitle = styled.h1`
  font-weight: lighter;
  margin: 0;
  padding: 0 0 .5rem;
  text-align: center;
  
`;

const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => (
  <header>
    <HeaderTitle>ToDo List</HeaderTitle>
    <HeaderNav>
      <FilterLink text="View All" isActive />
      <FilterLink text="Active" isActive={false} />
      <FilterLink text="Completed" isActive={false} />
    </HeaderNav>
  </header>
);

export default Header;
