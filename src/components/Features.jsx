import React, { useRef } from 'react';

const FeatureCard = ({ title, desc, icon, color, url }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    
    const rotateX = -y / 15;
    const rotateY = x / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <a 
      ref={cardRef}
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="glass-card tilt-card" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        padding: '40px', 
        textDecoration: 'none', 
        textAlign: 'center', 
        display: 'block', 
        height: '100%', 
        transition: 'all 0.1s ease-out, box-shadow 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: 'bold' }}>LEARN MORE ↗</div>
      <div style={{ color, fontSize: '3.5rem', marginBottom: '24px' }}>{icon}</div>
      <h3 style={{ marginBottom: '16px', fontSize: '1.25rem', color: '#fff' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{desc}</p>
    </a>
  );
};

const Features = ({ onBack }) => {
  const features = [
    { 
      title: "데이터 팩토리(Data Factory)", 
      desc: "데이터를 여러 곳에서 한꺼번에 가져오는 데이터 수집 도구입니다.", 
      icon: "🚚", 
      color: "#0078d4",
      url: "https://learn.microsoft.com/azure/data-factory/?wt.mc_id=studentamb_491736"
    },
    { 
      title: "데이터 웨어하우스(Warehouse)", 
      desc: "가져온 데이터를 체계적으로 정리하여 보관하는 대규모 데이터 창고입니다.", 
      icon: "🏙️", 
      color: "#008272",
      url: "https://learn.microsoft.com/fabric/data-warehouse/data-warehousing?wt.mc_id=studentamb_491736"
    },
    { 
      title: "데이터 사이언스(Data Science)", 
      desc: "인공지능(AI)을 활용해서 데이터를 분석하고 미래를 예측하는 도구입니다.", 
      icon: "🧠", 
      color: "#a011ff",
      url: "https://learn.microsoft.com/fabric/data-science/tutorial-data-science-prepare-system?wt.mc_id=studentamb_491736"
    },
    { 
      title: "파워 BI(Power BI)", 
      desc: "복잡한 데이터를 화려한 차트와 그래프로 예쁘게 그려내는 시각화 도구입니다.", 
      icon: "📊", 
      color: "#d83b01",
      url: "https://learn.microsoft.com/ko-kr/fabric/data-warehouse/data-warehousing?wt.mc_id=studentamb_491736"
    }
  ];

  return (
    <section className="section animate-up" style={{ minHeight: '90vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div className="feature-tag shimmer-text">FEATURES</div>
        <h2 className="gradient-text">핵심 기능 마스터하기</h2>
        <p style={{ color: 'var(--text-muted)' }}>각 항목을 클릭하면 공식 Microsoft Learn 페이지로 연결됩니다.</p>
      </div>

      <div className="grid-container" style={{ gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
        {features.map((f, i) => (
          <div key={i} className="animate-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <FeatureCard {...f} />
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '64px' }}>
        <button className="cta-button" onClick={onBack}>메뉴로 돌아가기</button>
      </div>
    </section>
  );
};

export default Features;
