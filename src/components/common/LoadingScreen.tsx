import { useEffect, useState } from "react";

interface LoadingScreenProps {
  isReady: boolean;
  onExited: () => void;
}

const LoadingScreen = ({ isReady, onExited }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(8);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let frameId = 0;
    let currentProgress = 8;
    const targetProgress = isReady ? 100 : 85;

    const animateProgress = () => {
      currentProgress += (targetProgress - currentProgress) * 0.08;
      if (Math.abs(targetProgress - currentProgress) < 0.1) {
        currentProgress = targetProgress;
      }
      setProgress(Math.round(currentProgress));
      if (currentProgress !== targetProgress) {
        frameId = window.requestAnimationFrame(animateProgress);
      }
    };

    frameId = window.requestAnimationFrame(animateProgress);
    return () => window.cancelAnimationFrame(frameId);
  }, [isReady]);

  useEffect(() => {
    if (!isReady || progress < 100) return;

    setIsExiting(true);
    const exitId = window.setTimeout(onExited, 700);
    return () => window.clearTimeout(exitId);
  }, [isReady, onExited, progress]);

  return (
    <div
      className={`loading-screen${isExiting ? " loading-screen--exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading experience ${progress}%`}
    >
      <div className="loading-screen__grid" aria-hidden="true" />
      <div className="loading-screen__glow loading-screen__glow--one" aria-hidden="true" />
      <div className="loading-screen__glow loading-screen__glow--two" aria-hidden="true" />
      <div className="loading-screen__particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="loading-screen__content">
        <div className="loading-screen__mark" aria-hidden="true">
          <span>SS</span>
        </div>
        <p className="loading-screen__eyebrow">Portfolio / 2026</p>
        <p className="loading-screen__label">Loading Experience...</p>
        <div className="loading-screen__progress-row">
          <div className="loading-screen__track" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress / 100})` }} />
          </div>
          <span className="loading-screen__percentage">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
