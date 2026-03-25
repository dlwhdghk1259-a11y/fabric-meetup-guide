import React, { useState } from 'react';

const steps = [
  {
    num: "01",
    title: "로그인 및 워크스페이스 생성",
    desc: "Microsoft 365 계정으로 접속하여 패브릭 전용 '작업 영역'을 만드세요. 패브릭은 모든 작업을 이 영역 단위로 관리합니다.",
    tip: "Tip: 계정이 없다면 Microsoft Learn의 무료 체험판을 활용해 보세요."
  },
  {
    num: "02",
    title: "데이터 가져오기 (Copy Data)",
    desc: "데이터 팩토리를 이용해 샘플 엑셀 파일이나 CSV 파일을 클릭-클릭 한 번으로 가져옵니다.",
    tip: "Tip: GitHub의 공개 데이터셋이나 내 컴퓨터의 엑셀 파일을 사용할 수 있습니다."
  },
  {
    num: "03",
    title: "레이크하우스(Lakehouse)에 담기",
    desc: "가져온 원시 데이터를 레이크하우스라는 통합 저장소에 보기 좋게 저장합니다.",
    tip: "Tip: 레이크하우스는 SQL과 데이터를 한곳에서 다룰 수 있는 편리한 공간입니다."
  },
  {
    num: "04",
    title: "대시보드로 시각화하기",
    desc: "Power BI를 눌러 방금 저장한 데이터를 불러오면, 인공지능이 자동으로 멋진 도표와 보고서를 그려줍니다!",
    tip: "Tip: '자동 보고서 생성' 기능을 써보세요. 단 몇 초 만에 완성됩니다!"
  }
];

const Guide = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="section animate-up" style={{ minHeight: '90vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div className="feature-tag">GUIDELINE</div>
        <h2>30분 밋업 실습 가이드라인</h2>
        <p style={{ color: 'var(--text-muted)' }}>한 단계씩 차근차근 따라와 보세요.</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Step Indicator */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', position: 'relative' }}>
          <div style={{ height: '2px', background: 'rgba(255,255,255,0.1)', position: 'absolute', top: '24px', left: 0, right: 0, zIndex: 0 }} />
          {steps.map((_, i) => (
            <div 
              key={i} 
              style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '50%', 
                background: i <= currentStep ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                border: '2px solid',
                borderColor: i <= currentStep ? 'transparent' : 'rgba(255,255,255,0.1)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                zIndex: 1,
                transition: 'all 0.3s ease'
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Step Card */}
        <div className="glass-card" style={{ padding: '48px', marginBottom: '48px', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: '32px', marginBottom: '40px', alignItems: 'flex-start' }}>
              <div style={{
                padding: '12px 24px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                flexShrink: 0
              }}>{steps[currentStep].num}</div>
              <div>
                <h3 style={{ marginBottom: '16px', fontSize: '1.75rem' }}>{steps[currentStep].title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>{steps[currentStep].desc}</p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: '2px dashed rgba(255, 255, 255, 0.1)', 
              borderRadius: '24px', 
              height: '240px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.2)',
              margin: '32px 0'
            }}>
              [실제 Fabric 화면 캡쳐 이미지가 들어갈 위치입니다]
            </div>

            <div style={{ 
              padding: '16px 24px', 
              background: 'rgba(0, 120, 212, 0.08)', 
              borderRadius: '12px', 
              borderLeft: '4px solid #0078D4',
              color: '#fff',
              fontSize: '0.9rem'
            }}>
              {steps[currentStep].tip}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '48px' }}>
            <button 
              className="cta-button" 
              onClick={prevStep} 
              disabled={currentStep === 0}
              style={{ background: 'rgba(255,255,255,0.05)', color: currentStep === 0 ? 'rgba(255,255,255,0.2)' : 'white' }}
            >
              이전 단계
            </button>
            
            {currentStep < steps.length - 1 ? (
              <button 
                className="cta-button" 
                onClick={nextStep}
              >
                다음 단계
              </button>
            ) : (
              <button 
                className="cta-button" 
                onClick={onBack}
                style={{ background: 'linear-gradient(135deg, #008272, #0078d4)' }}
              >
                가이드 마스터! 메인으로
              </button>
            )}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="cta-button" onClick={onBack} style={{ background: 'none', textDecoration: 'underline' }}>그만하고 메뉴로 돌아가기</button>
        </div>
      </div>
    </section>
  );
};

export default Guide;
