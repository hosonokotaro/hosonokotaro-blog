import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>HOSONOKOTARO Blog</h1>
      <ul>
        <li>
          <Link to="/">Top</Link>
        </li>
        <li>
          <Link to="/editpost">EditPost</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
