import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="subtitle animate-up">MEETUP GUIDE</div>
      <h1 className="gradient-text animate-up" style={{ animationDelay: '0.1s' }}>
        Microsoft Fabric <br /> 핵심 가이드
      </h1>
      <p className="animate-up" style={{ animationDelay: '0.2s' }}>
        중학생부터 직장인까지, 데이터로 세상을 연결하는 <br />
        가장 쉬운 방법을 30분 만에 마스터해보세요.
      </p>
      <div className="animate-up" style={{ animationDelay: '0.3s' }}>
        <button className="cta-button" onClick={() => document.getElementById('concept').scrollIntoView({ behavior: 'smooth' })}>
          시작하기
        </button>
      </div>
    </section>
  );
};

export default Hero;
