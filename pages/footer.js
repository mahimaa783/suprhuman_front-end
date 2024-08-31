import React, { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [active, setActive] = useState(''); // State to manage which icon is active

  // Function to handle click and set the active icon
  const handleClick = (icon) => {
    setActive(icon);
  };

  return (
    <footer style={footerStyle}>
      
      {/* First Icon Container: Friends and Upgrades */}
      <div style={iconGroupStyle}>
        <Link href="/friends" passHref>
          <div
            onClick={() => handleClick('friends')}
            style={{
              ...iconContainerStyle,
              border: active === 'friends' ? '2px solid orange' : 'none',
            }}
          >
            <img
              src={active === 'friends' ? '/friends2.png' : '/friends.png'}
              alt="Friends"
              style={iconStyle}
            />
            <p style={textStyle}>FRIENDS</p>
          </div>
        </Link>

        <Link href="/upgrade" passHref>
          <div
            onClick={() => handleClick('upgrade')}
            style={{
              ...iconContainerStyle,
              border: active === 'upgrade' ? '2px solid orange' : 'none',
            }}
          >
            <img
              src={active === 'upgrade' ? '/upgrade2.png' : '/upgrade.png'}
              alt="Upgrades"
              style={iconStyle}
            />
            <p style={textStyle}>UPGRADES</p>
          </div>
        </Link>
      </div>

      {/* Home Icon */}
      <Link href="/home" passHref>
        <div
          onClick={() => handleClick('home')}
          style={{
            ...homeContainerStyle,
          }}
        >
          <img
            src={active === 'home' ? '/coin2.png' : '/coin.png'}
            alt="Home"
            style={homeIconStyle}
          />
        </div>
      </Link>

      {/* Second Icon Container: Earn and Stats */}
      <div style={iconGroupStyle}>
        <Link href="/earn" passHref>
          <div
            onClick={() => handleClick('earn')}
            style={{
              ...iconContainerStyle,
              border: active === 'earn' ? '2px solid orange' : 'none',
            }}
          >
            <img
              src={active === 'earn' ? '/earn2.png' : '/earn.png'}
              alt="Earn"
              style={iconStyle}
            />
            <p style={textStyle}>EARN</p>
          </div>
        </Link>

        <Link href="/stats" passHref>
          <div
            onClick={() => handleClick('stats')}
            style={{
              ...iconContainerStyle,
              border: active === 'stats' ? '2px solid orange' : 'none',
            }}
          >
            <img
              src={active === 'stats' ? '/stats2.png' : '/stats.png'}
              alt="Stats"
              style={iconStyle}
            />
            <p style={textStyle}>STATS</p>
          </div>
        </Link>
      </div>
    </footer>
  );
};

// Styling for footer and icons
const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#000',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  borderTop: '1px solid orange',
  boxShadow: '0 0 5px #61440efc',
};

const iconGroupStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '55%',
};

const iconContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '8px',
  width:'50px'
};

const iconStyle = {
  width: '25px', // Adjust size as needed
  height: '20px',
  marginTop: '5px',
};

const textStyle = {
  color: 'white',
  fontSize: '10px', // Reduced font size
  marginTop: '3px',
};

// Separate styling for the home icon
const homeContainerStyle = {
  borderRadius: '50%', // Rounded edges for a coin-like appearance
  cursor: 'pointer',
};

const homeIconStyle = {
  width: '75px', // Size for the home icon
  height: '75px',
};

export default Footer;
