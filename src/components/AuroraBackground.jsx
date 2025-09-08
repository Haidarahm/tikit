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
            radial-gradient(1600px 800px at 50% -15%, rgba(0,0,0,0.95), transparent 45%), /* deeper top black */
            radial-gradient(1600px 800px at 50% 110%, rgba(0,0,0,0.65), transparent 38%); /* bottom fade */
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
          width: 1350px;
          height: 820px;
          left: -24%;
          bottom: -34%;
          background:
            radial-gradient(70% 60% at 38% 68%, rgba(88, 96, 210, 0.9) 0%, rgba(88, 96, 210, 0.34) 48%, transparent 78%),
            radial-gradient(38% 42% at 72% 42%, rgba(40, 48, 140, 0.24) 0%, transparent 74%);
          animation: aurora-move-A 26s ease-in-out infinite alternate;
        }

        .aurora-layer--B{
          /* tall right pillar with cyan core */
          width: 1150px;
          height: 1750px;
          right: -40%;
          top: -14%;
          background:
            radial-gradient(62% 84% at 28% 42%, rgba(126, 154, 216, 0.9) 0%, rgba(126,154,216,0.36) 46%, transparent 82%),
            radial-gradient(46% 70% at 58% 58%, rgba(134, 184, 204, 0.38) 0%, transparent 80%), /* cyan tint */
            radial-gradient(40% 64% at 72% 66%, rgba(62, 74, 164, 0.22) 0%, transparent 78%);
          animation: aurora-move-B 32s cubic-bezier(.2,.8,.2,1) infinite alternate;
          filter: blur(84px);
          opacity: 0.92;
        }

        .aurora-layer--C{
          /* bottom-right mound */
          width: 1180px;
          height: 720px;
          right: -16%;
          bottom: -30%;
          background:
            radial-gradient(62% 58% at 52% 60%, rgba(84, 100, 194, 0.88) 0%, rgba(84,100,194,0.3) 46%, transparent 78%),
            radial-gradient(42% 40% at 24% 74%, rgba(140,170,200,0.2) 0%, transparent 70%);
          animation: aurora-move-C 24s ease-in-out infinite alternate-reverse;
          filter: blur(74px);
          opacity: 0.9;
        }

        /* central dark occlusion to mimic valley */
        .aurora-occlude{
          position: absolute;
          left: 46%;
          top: -6%;
          width: 24%;
          height: 130%;
          background: radial-gradient(60% 90% at 50% 30%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.0) 70%);
          filter: blur(40px);
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        .aurora-darken{
          position: absolute;
          inset: 0;
          background:
            radial-gradient(1400px 900px at 50% -12%, rgba(0,0,0,0.82), transparent 52%), /* top vignette */
            radial-gradient(1600px 1000px at 50% 110%, rgba(0,0,0,0.62), transparent 48%); /* bottom vignette */
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        @keyframes aurora-move-A{
          0%   { transform: translate3d(-26px, -4px, 0) scale(1); }
          50%  { transform: translate3d(22px, 10px, 0) scale(1.02); }
          100% { transform: translate3d(-10px, 4px, 0) scale(0.995); }
        }
        @keyframes aurora-move-B{
          0%   { transform: translate3d(26px, 0px, 0) scale(1); }
          50%  { transform: translate3d(-34px, -10px, 0) scale(1.02); }
          100% { transform: translate3d(12px, 8px, 0) scale(0.995); }
        }
        @keyframes aurora-move-C{
          0%   { transform: translate3d(12px, 8px, 0) scale(1); }
          50%  { transform: translate3d(-16px, -12px, 0) scale(1.02); }
          100% { transform: translate3d(10px, 6px, 0) scale(0.995); }
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
