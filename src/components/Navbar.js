import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/quote',
      text: 'Quote',
    },
    {
      id: 3,
      path: '/calc',
      text: 'Calculator',
    },
  ];
  return (
    <nav className="navBar">
      <h4> Math Magicians </h4>
      <ul>
        {
          links.map(link => (
            <li key={link.id}>
              <NavLink to={link.path} className="navBar-link" activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
export default Navbar;
