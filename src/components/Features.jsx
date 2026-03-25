import React from 'react';

const FeatureCard = ({ title, desc, icon, color }) => (
  <div className="glass-card" style={{ padding: '32px' }}>
    <div style={{ color, fontSize: '2rem', marginBottom: '20px' }}>{icon}</div>
    <h3 style={{ marginBottom: '12px', fontSize: '1.25rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{desc}</p>
  </div>
);

const Features = () => {
  const features = [
    { title: "데이터 팩토리(Data Factory)", desc: "데이터를 여러 곳에서 한꺼번에 가져오는 '트럭' 역할을 해요.", icon: "🚚", color: "#0078d4" },
    { title: "데이터 웨어하우스(Warehouse)", desc: "가져온 데이터를 체계적으로 정리하여 보관하는 '창고'입니다.", icon: "🏙️", color: "#008272" },
    { title: "데이터 사이언스(Data Science)", desc: "인공지능(AI)을 활용해서 데이터를 분석하고 미래를 예측해요.", icon: "🧠", color: "#a011ff" },
    { title: "파워 BI(Power BI)", desc: "복잡한 데이터를 화려한 차트와 그래프로 예쁘게 그려냅니다.", icon: "📊", color: "#d83b01" }
  ];

  return (
    <section id="features" className="section">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="feature-tag">FEATURES</div>
        <h2>다양한 도구들을 하나로</h2>
        <p style={{ color: 'var(--text-muted)' }}>네 가지 핵심 기능으로 데이터의 전체 흐름을 잡을 수 있습니다.</p>
      </div>
      <div className="grid-container scroll-animate">
        {features.map((f, i) => <FeatureCard key={i} {...f} />)}
      </div>
    </section>
  );
};

export default Features;
