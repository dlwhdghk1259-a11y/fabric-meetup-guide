import React from 'react';

const Navbar = ({ onHome, onNavigate }) => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      background: 'rgba(11, 14, 20, 0.8)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div 
          onClick={onHome} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            cursor: 'pointer', 
            fontFamily: 'Outfit', 
            fontWeight: 800, 
            fontSize: '1.25rem' 
          }}
        >
          {/* Microsoft Fabric Logo SVG Placeholder */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4L2 11.5L16 19L30 11.5L16 4Z" fill="#0078D4" />
            <path d="M2 20.5L16 28L30 20.5V14.5L16 22L2 14.5V20.5Z" fill="#0078D4" fillOpacity="0.8" />
          </svg>
          <span style={{ letterSpacing: '-0.02em' }}>맞다<span style={{ color: '#0078D4' }}>AI가</span></span>
        </div>
        
        <div style={{ display: 'flex', gap: '24px' }}>
          <button 
            onClick={() => onNavigate('concept')}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
          >
            컨셉
          </button>
          <button 
            onClick={() => onNavigate('features')}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
          >
            기능
          </button>
          <button 
            onClick={() => onNavigate('guide')}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
          >
            가이드
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
