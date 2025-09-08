import React from "react";

const AuroraBackground = ({ className = "", style = {} }) => {
  return (
    <div
      className={`aurora-root ${className}`}
      style={style}
      aria-hidden="true"
    >
      <div className="aurora-layer aurora-layer--A" />
      <div className="aurora-layer aurora-layer--B" />
      <div className="aurora-layer aurora-layer--C" />
      <div className="aurora-darken" />

      <style>{`
        .aurora-root{
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0; /* keep behind UI that uses higher z (navbar is z-50) */
          pointer-events: none;
          background:
            radial-gradient(1200px 600px at 10% 20%, rgba(0,0,0,0.45), transparent 20%),
            radial-gradient(1000px 500px at 90% 80%, rgba(0,0,10,0.35), transparent 20%);
          will-change: transform, opacity;
        }

        .aurora-layer{
          position: absolute;
          border-radius: 50%;
          filter: blur(64px);
          transform: translate3d(0,0,0);
          opacity: 0.9;
          mix-blend-mode: screen;
          will-change: transform, opacity, filter;
        }

        .aurora-layer--A{
          width: 1000px;
          height: 600px;
          left: -12%;
          top: -18%;
          background:
            radial-gradient(60% 60% at 30% 40%, rgba(115,151,176,0.95) 0%, rgba(115,151,176,0.35) 30%, transparent 60%),
            radial-gradient(40% 40% at 80% 70%, rgba(53,62,131,0.22) 0%, transparent 60%);
          animation: aurora-move-A 14s ease-in-out infinite alternate;
        }

        .aurora-layer--B{
          width: 1200px;
          height: 700px;
          right: -20%;
          top: 5%;
          background:
            radial-gradient(60% 60% at 20% 30%, rgba(59,68,149,0.95) 0%, rgba(59,68,149,0.25) 35%, transparent 70%),
            radial-gradient(50% 50% at 70% 70%, rgba(115,151,176,0.12) 0%, transparent 60%);
          animation: aurora-move-B 18s cubic-bezier(.2,.8,.2,1) infinite alternate;
          filter: blur(72px);
          opacity: 0.95;
        }

        .aurora-layer--C{
          width: 900px;
          height: 500px;
          left: 8%;
          bottom: -12%;
          background:
            radial-gradient(50% 50% at 60% 40%, rgba(53,62,131,0.88) 0%, rgba(59,68,149,0.18) 40%, transparent 75%),
            radial-gradient(30% 30% at 10% 80%, rgba(115,151,176,0.22) 0%, transparent 60%);
          animation: aurora-move-C 12s ease-in-out infinite alternate-reverse;
          filter: blur(56px);
          opacity: 0.86;
        }

        .aurora-darken{
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(3,6,18,0.55) 0%, rgba(2,4,12,0.72) 100%);
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        @keyframes aurora-move-A{
          0%   { transform: translate3d(-30px, 0px, 0) scale(1); }
          50%  { transform: translate3d(30px, -18px, 0) scale(1.03); }
          100% { transform: translate3d(-10px, 6px, 0) scale(0.98); }
        }
        @keyframes aurora-move-B{
          0%   { transform: translate3d(40px, -10px, 0) scale(1); }
          50%  { transform: translate3d(-60px, 18px, 0) scale(1.05); }
          100% { transform: translate3d(20px, -4px, 0) scale(0.98); }
        }
        @keyframes aurora-move-C{
          0%   { transform: translate3d(10px, 20px, 0) scale(1); }
          50%  { transform: translate3d(-24px, -28px, 0) scale(1.04); }
          100% { transform: translate3d(8px, 8px, 0) scale(0.97); }
        }

        @media (prefers-reduced-motion: reduce) {
          .aurora-layer--A, .aurora-layer--B, .aurora-layer--C {
            animation: none;
          }
        }

        @media (max-width: 768px){
          .aurora-layer--A{ width: 900px; height: 520px; filter: blur(48px); left: -20%; top: -20%; }
          .aurora-layer--B{ width: 1000px; height: 600px; right: -30%; top: 0%; filter: blur(60px); }
          .aurora-layer--C{ width: 700px; height: 420px; left: 6%; bottom: -18%; filter: blur(44px); }
        }
      `}</style>
    </div>
  );
};

export default AuroraBackground;
