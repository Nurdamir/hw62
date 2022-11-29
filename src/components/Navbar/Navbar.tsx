import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';

const Navbar: React.FC = () => {
  const [navItems] = useState([
    {name: 'Home', route: '/'},
    {name: 'About me', route: '/about-me'},
    {name: 'Skills', route: '/skills'},
    {name: 'Portfolio', route: '/portfolio'},
    {name: 'Contacts', route: '/contacts'},
  ]);

  return (
      <div className="d-flex justify-content-between align-items-center py-2 px-4 border-bottom fs-5">
        <NavLink
          to='/'
          className="logo text-black text-decoration-none px-2"
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPG25E0BDYJDzuZDQULDjDvcyfOsP567ie9qtjH6D8gqi4b1FbYQI8GGPalnnpfhgO7Y&usqp=CAU" alt="logo"/>
        </NavLink>
        <ul className="px-0 align-self-center m-0">
          {navItems.map(item => (
            <li key={Math.random()} className="d-inline px-3">
              <NavLink
                to={item.route}
                className="text-capitalize text-decoration-none nav-item text-white px-1"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Navbar;