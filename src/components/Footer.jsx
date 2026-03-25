import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '8px', color: 'white' }}>
            Microsoft Fabric <span style={{ color: '#0078d4' }}>Meetup Korea</span>
          </div>
          <p style={{ fontSize: '0.8rem' }}>&copy; 2026 밋업 커뮤니티. All rights reserved.</p>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>공식 문서</a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>커뮤니티</a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>피드백</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
