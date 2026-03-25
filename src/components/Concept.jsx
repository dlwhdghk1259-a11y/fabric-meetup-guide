import React from 'react';

const Concept = ({ onBack }) => {
  return (
    <section className="section animate-up" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="feature-tag">CONCEPT</div>
        <h2>마이크로소프트 패브릭(Fabric)이란?</h2>
        <p style={{ color: 'var(--text-muted)' }}>스마트폰에 비유하면 훨씬 이해하기 쉬워요! 📱</p>
      </div>
      
      <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(24px, 5vw, 48px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '20px' }}>패브릭은 <span style={{ color: '#0078D4' }}>'최신형 스마트폰'</span>과 같습니다!</h3>
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              예전에는 사진을 찍으려면 <b>카메라</b>가, 전화를 하려면 <b>공중전화</b>가, 노래를 들으려면 <b>MP3</b>가 따로 필요했어요. 
              이 모든 도구가 하나로 합쳐진 것이 바로 <b>스마트폰</b>이죠.
            </p>
            <p style={{ lineHeight: '1.8' }}>
              <span style={{ fontWeight: 800 }}>패브릭(Fabric)</span>도 마찬가지예요. 
              데이터를 가져오고, 저장하고, 분석하고, 그래프로 그리는 모든 개별적인 도구를 <b>커다란 하나의 데이터 전용 스마트폰</b>처럼 합쳐놓은 것이랍니다.
            </p>
          </div>
          
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '32px', padding: '32px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '1.25rem' }}>🔌</span>
                <div>
                  <b style={{ color: '#0078D4' }}>데이터 팩토리</b>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>충전 케이블처럼 외부 데이터를 폰 안으로 쏙!</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '1.25rem' }}>💾</span>
                <div>
                  <b style={{ color: '#008272' }}>원레이크 (OneLake)</b>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>모든 사진과 앱이 저장되는 하나의 통합 저장 탱크!</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '1.25rem' }}>🖼️</span>
                <div>
                  <b style={{ color: '#D83B01' }}>파워 BI</b>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>고화질 화면처럼 데이터를 한눈에 보여줍니다!</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button className="cta-button" onClick={onBack}>메뉴로 돌아가기</button>
        </div>
      </div>
    </section>
  );
};

export default Concept;
