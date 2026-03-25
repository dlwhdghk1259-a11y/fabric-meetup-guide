import React from 'react';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '8px', color: 'white', fontFamily: 'Outfit' }}>
            맞다<span style={{ color: '#0078D4' }}>AI가</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', maxWidth: '300px' }}>
            비공식 밋업 진행 커뮤니티 '맞다AI가'에서 제공하는 <br /> 
            Microsoft Fabric 핵심 가이드라인입니다.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          <button 
            onClick={() => onNavigate('features')}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            공식 문서
          </button>
          <a href="https://www.linkedin.com/company/matdaaiga/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>커뮤니티</a>
          <a href="mailto:dlwhdghk1259@naver.com?subject=[맞다AI가 밋업] 피드백 작성&body=피드백 내용을 자유롭게 남겨주세요:%0D%0A%0D%0A" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>피드백</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '40px', paddingTop: '24px', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)' }}>
        &copy; 2026 Matta AI-ga Community. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
