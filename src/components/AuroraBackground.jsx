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
            radial-gradient(1400px 700px at 50% -10%, rgba(0,0,0,0.85), transparent 40%), /* top vignette */
            radial-gradient(1400px 700px at 50% 110%, rgba(0,0,0,0.6), transparent 35%); /* bottom fade */
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
          /* bottom-left mound */
          width: 1200px;
          height: 700px;
          left: -20%;
          bottom: -28%;
          background:
            radial-gradient(70% 60% at 40% 60%, rgba(90, 104, 199, 0.95) 0%, rgba(90,104,199,0.35) 45%, transparent 75%),
            radial-gradient(50% 40% at 75% 40%, rgba(37, 44, 120, 0.25) 0%, transparent 70%);
          animation: aurora-move-A 20s ease-in-out infinite alternate;
        }

        .aurora-layer--B{
          /* tall right pillar */
          width: 1100px;
          height: 1600px;
          right: -38%;
          top: -12%;
          background:
            radial-gradient(60% 80% at 30% 40%, rgba(112, 140, 204, 0.92) 0%, rgba(112,140,204,0.35) 45%, transparent 80%),
            radial-gradient(40% 60% at 70% 60%, rgba(58, 72, 160, 0.22) 0%, transparent 75%);
          animation: aurora-move-B 26s cubic-bezier(.2,.8,.2,1) infinite alternate;
          filter: blur(80px);
          opacity: 0.9;
        }

        .aurora-layer--C{
          /* bottom-right mound */
          width: 1100px;
          height: 650px;
          right: -18%;
          bottom: -26%;
          background:
            radial-gradient(60% 55% at 50% 55%, rgba(80, 96, 188, 0.88) 0%, rgba(80,96,188,0.28) 45%, transparent 75%),
            radial-gradient(40% 35% at 20% 70%, rgba(125,155,190,0.18) 0%, transparent 65%);
          animation: aurora-move-C 18s ease-in-out infinite alternate-reverse;
          filter: blur(70px);
          opacity: 0.9;
        }

        .aurora-darken{
          position: absolute;
          inset: 0;
          background:
            radial-gradient(1200px 800px at 50% -10%, rgba(0,0,0,0.75), transparent 50%), /* top vignette */
            radial-gradient(1400px 900px at 50% 110%, rgba(0,0,0,0.6), transparent 45%); /* bottom vignette */
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        @keyframes aurora-move-A{
          0%   { transform: translate3d(-30px, -6px, 0) scale(1); }
          50%  { transform: translate3d(24px, 8px, 0) scale(1.02); }
          100% { transform: translate3d(-12px, 2px, 0) scale(0.99); }
        }
        @keyframes aurora-move-B{
          0%   { transform: translate3d(30px, 0px, 0) scale(1); }
          50%  { transform: translate3d(-36px, -10px, 0) scale(1.03); }
          100% { transform: translate3d(14px, 6px, 0) scale(0.995); }
        }
        @keyframes aurora-move-C{
          0%   { transform: translate3d(10px, 10px, 0) scale(1); }
          50%  { transform: translate3d(-18px, -14px, 0) scale(1.03); }
          100% { transform: translate3d(8px, 4px, 0) scale(0.995); }
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
