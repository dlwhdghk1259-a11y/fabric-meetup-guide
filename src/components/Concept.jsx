import React from 'react';

const Concept = () => {
  return (
    <section id="concept" className="section glass-card scroll-animate" style={{ margin: '40px auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div className="feature-tag">CONCEPT</div>
        <h2>마이크로소프트 패브릭(Fabric)이란?</h2>
        <p style={{ color: 'var(--text-muted)' }}>누구나 이해할 수 있게 아주 쉽게 설명해드릴게요.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '16px' }}>'데이터'라는 식재료로 요리를 한다면?</h3>
          <p style={{ marginBottom: '16px' }}>
            우리가 맛있는 요리(데이터 분석)를 하려면 식재료를 사고(데이터 수집), 다듬고(전처리), 조리해야(분석) 해요. 
            그전에는 각 단계마다 서로 다른 전용 도구가 필요해서 주방과 거실, 마당을 왔다 갔다 해야만 했죠.
          </p>
          <p style={{ fontWeight: 600 }}>
            <span style={{ color: '#008272' }}>패브릭</span>은 이 모든 주방 기구가 하나로 합쳐진 <b>'최첨단 스마트 올인원 주방'</b>과 같아요!
          </p>
        </div>
        
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', position: 'relative', overflow: 'hidden' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ background: '#0078d4', width: '24px', height: '24px', borderRadius: '50%', display: 'inline-block', flexShrink: 0, textAlign: 'center', lineHeight: '24px', fontSize: '14px', fontWeight: 'bold' }}>1</span>
              <span>데이터를 찾는 고생(주방 이동) 끝! <br /><small style={{ color: 'var(--text-muted)' }}>한곳에서 모든 데이터를 볼 수 있어요.</small></span>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ background: '#008272', width: '24px', height: '24px', borderRadius: '50%', display: 'inline-block', flexShrink: 0, textAlign: 'center', lineHeight: '24px', fontSize: '14px', fontWeight: 'bold' }}>2</span>
              <span>누구나 쉽게 조리하기! <br /><small style={{ color: 'var(--text-muted)' }}>전문가부터 직장인까지 모두가 쓸 수 있게 쉽습니다.</small></span>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ background: '#a011ff', width: '24px', height: '24px', borderRadius: '50%', display: 'inline-block', flexShrink: 0, textAlign: 'center', lineHeight: '24px', fontSize: '14px', fontWeight: 'bold' }}>3</span>
              <span>AI가 도와줘요! <br /><small style={{ color: 'var(--text-muted)' }}>GPT 같은 인공지능이 데이터 정리를 도와줍니다.</small></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Concept;
