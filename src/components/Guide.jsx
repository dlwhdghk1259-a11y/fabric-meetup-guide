import React from 'react';

const Step = ({ num, title, desc }) => (
  <div style={{ display: 'flex', gap: '32px', marginBottom: '40px', alignItems: 'flex-start' }}>
    <div style={{
      padding: '12px 24px',
      borderRadius: '50px',
      background: 'linear-gradient(135deg, var(--primary), var(--accent))',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      flexShrink: 0
    }}>{num}</div>
    <div>
      <h3 style={{ marginBottom: '12px' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)' }}>{desc}</p>
    </div>
  </div>
);

const Guide = () => {
  return (
    <section id="guide" className="section scroll-animate">
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div className="feature-tag">GUIDELINE</div>
        <h2>30분 밋업 실습 가이드라인</h2>
        <p style={{ color: 'var(--text-muted)' }}>시작부터 결과물까지, 단계별로 따라와 보세요.</p>
      </div>
      
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', boxShadow: '0 40px 100px -30px rgba(0, 120, 212, 0.2)' }}>
        <Step
          num="01"
          title="로그인 및 워크스페이스 생성"
          desc="Microsoft 365 계정으로 접속하여 패브릭 전용 '작업 영역'을 만드세요. 패브릭은 모든 작업을 이 영역 단위로 관리합니다."
        />
        <Step
          num="02"
          title="데이터 가져오기 (Copy Data)"
          desc="데이터 팩토리를 이용해 샘플 엑셀 파일이나 CSV 파일을 클릭-클릭 한 번으로 가져옵니다."
        />
        <Step
          num="03"
          title="레이크하우스(Lakehouse)에 담기"
          desc="가져온 원시 데이터를 레이크하우스라는 통합 저장소에 보기 좋게 저장합니다."
        />
        <Step
          num="04"
          title="대시보드로 시각화하기"
          desc="Power BI를 눌러 방금 저장한 데이터를 불러오면, 인공지능이 자동으로 멋진 도표와 보고서를 그려줍니다!"
        />
      </div>
    </section>
  );
};

export default Guide;
