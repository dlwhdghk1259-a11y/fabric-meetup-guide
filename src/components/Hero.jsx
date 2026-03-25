import React from 'react';

const Hero = ({ onStart }) => {
  return (
    <section className="hero animate-up" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="subtitle animate-up">맞다AI가 비공식 밋업</div>
      
      {/* Microsoft Fabric Official-ish SVG Logo */}
      <div style={{ marginBottom: '32px' }}>
        <svg width="120" height="120" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 30px var(--primary-glow))' }}>
          <path d="M16 4L2 11.5L16 19L30 11.5L16 4Z" fill="#0078D4" />
          <path d="M2 20.5L16 28L30 20.5V14.5L16 22L2 14.5V20.5Z" fill="#0078D4" fillOpacity="0.8" />
        </svg>
      </div>

      <h1 className="gradient-text animate-up" style={{ animationDelay: '0.1s', textAlign: 'center', marginBottom: '24px' }}>
        Microsoft Fabric <br /> 핵심 가이드
      </h1>
      
      <p className="animate-up" style={{ animationDelay: '0.2s', textAlign: 'center', maxWidth: '600px', marginBottom: '40px', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>
        데이터 준비부터 시각화까지 한번에! <br />
        지금 바로 시작해 보세요.
      </p>

      <div className="animate-up" style={{ animationDelay: '0.3s' }}>
        <button 
          className="cta-button" 
          onClick={onStart}
          style={{ padding: '20px 60px', fontSize: '1.25rem' }}
        >
          시작하기
        </button>
      </div>
    </section>
  );
};

export default Hero;
