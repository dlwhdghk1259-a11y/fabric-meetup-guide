import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      background: 'rgba(11, 14, 20, 0.7)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontWeight: 800, fontSize: '1.25rem', fontFamily: 'Outfit' }}>
          FABRIC<span style={{ color: '#0078d4' }}>MEETUP</span>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#concept" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>컨셉</a>
          <a href="#features" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>기능</a>
          <a href="#guide" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>가이드</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
