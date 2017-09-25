import React from 'react';
import FilterLink from './FilterLink';

const Header = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Completed</FilterLink>
    {' '}
    <FilterLink>Active</FilterLink>
  </div>
)

export default Header;
