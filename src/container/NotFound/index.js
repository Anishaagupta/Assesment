import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Oops ! Page Not Found</h1>
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
