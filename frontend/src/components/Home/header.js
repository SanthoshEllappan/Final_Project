import React from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { AuthUser } from '../AuthRouter';

const Header = () => {
  const auth = AuthUser();
  console.log(auth.user)

  return (
    <header className="header" style={{ background: '#3f51b5', color: 'white', padding: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Welcome, {auth.user ? auth.user.data.name : "Guest"}</h1>
        <nav>
          <Link to="/home" style={{ color: 'white', margin: '0 15px' }}>Home</Link>
          <Link to="/settings" style={{ color: 'white', margin: '0 15px' }}>Settings</Link>
          <Link to="/help" style={{ color: 'white', margin: '0 15px' }}>help</Link>
          <Button label="Log Out" className="p-button-danger" onClick={() => auth.logOut()} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
