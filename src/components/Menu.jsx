import React, { useRef } from 'react';

const TiltCard = ({ item, onClick }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div 
      ref={cardRef}
      className="glass-card tilt-card" 
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer', textAlign: 'center', padding: '48px 32px' }}
    >
      <div style={{ fontSize: '3.5rem', marginBottom: '24px' }} className="floating">{item.icon}</div>
      <h3 className="shimmer-text" style={{ marginBottom: '12px', fontSize: '1.5rem' }}>{item.title}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
      
      <div style={{ marginTop: '24px', opacity: 0.5, fontSize: '0.7rem', fontWeight: 'bold', color: item.color }}>
        CLICK TO EXPLORE
      </div>
    </div>
  );
};

const Menu = ({ onNavigate }) => {
  const menuItems = [
    { id: 'concept', title: '컨셉', icon: '📱', color: '#0078D4', desc: '스마트폰으로 비유하는 쉬운 개념 이해' },
    { id: 'features', title: '핵심 기능', icon: '🛠️', color: '#008272', desc: '네 가지 주요 도구와 공식 학습 자료' },
    { id: 'guide', title: '가이드라인', icon: '📝', color: '#A011FF', desc: '단계별 실습 가이드 (Step-by-step)' }
  ];

  return (
    <section className="section animate-up" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }} className="gradient-text">맞다AI가 <span style={{ color: 'var(--primary)' }}>메뉴</span></h2>
        <p style={{ color: 'var(--text-muted)' }}>확인하고 싶은 항목을 선택해 주세요.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        {menuItems.map((item) => (
          <TiltCard key={item.id} item={item} onClick={() => onNavigate(item.id)} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
