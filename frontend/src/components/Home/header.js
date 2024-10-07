import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { AuthUser } from '../AuthRouter';
import { RiInformationLine,RiHome2Line, RiSettings2Line, RiQuestionLine } from 'react-icons/ri'; // Example icons

const Header = () => {
  const auth = AuthUser();
  console.log(auth.user);

  // Function to generate a random Avataaars avatar URL
  const generateAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 1000); // Random number for variation
    return `https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Round&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=ShirtScoopNeck&clotheColor=PastelBlue&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light`;
  };

  // State to store the generated avatar URL
  const [avatarUrl, setAvatarUrl] = useState('');
  
  // State for the search input
  const [searchTerm, setSearchTerm] = useState('');

  // Generate a random avatar when the component mounts
  useEffect(() => {
    setAvatarUrl(generateAvatar());
  }, []);

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="header" style={{
      background: '#3f51b5',
      color: 'white',
      padding: '15px 20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt="Avatar"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              marginRight: '10px',
            }}
          />
        )}
        <h1 style={{ margin: 0 }}>Welcome, {localStorage.getItem('name') ? localStorage.getItem('name') : "Guest"}</h1>
      </div>
      
      {/* Search Bar */}
      <div style={{ margin: '0 20px', display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          style={{
            padding: '10px 15px',
            borderRadius: '10px',
            border: 'none',
            outline: 'none',
            width: '250px', // Increased width
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
            color: '#333',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
            transition: 'background-color 0.3s ease', // Smooth transition for hover effect
          }}
          onFocus={(e) => e.target.style.backgroundColor = 'white'} // Change background on focus
          onBlur={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'} // Reset background on blur
        />
        <Button label="Search" className="p-button" style={{ marginLeft: '5px' }} />
      </div>

      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="dashboard" style={{
          color: 'white',
          margin: '0 15px',
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          <RiHome2Line style={{ marginRight: '5px' }} /> Home
        </Link>
        <Link to="/empdetails" style={{
          color: 'white',
          margin: '0 15px',
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          fontWeight: '500'
        }}>   <RiInformationLine style={{ marginRight: '5px' }} /> Details     </Link>
        <Link to="/settings" style={{
          color: 'white',
          margin: '0 15px',
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          <RiSettings2Line style={{ marginRight: '5px' }} /> Settings
        </Link>
        <Link to="/help" style={{
          color: 'white',
          margin: '0 15px',
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          <RiQuestionLine style={{ marginRight: '5px' }} /> Help
        </Link>
        <Button
          label="Log Out"
          className="p-button-danger"
          icon="pi pi-sign-out"
          onClick={() => auth.logOut()}
          style={{ marginLeft: '15px' }}
        />
      </nav>
    </header>
  );
};

export default Header;
