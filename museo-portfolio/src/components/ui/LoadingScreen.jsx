// src/components/ui/LoadingScreen.jsx
import "./loading-screen.css";

export default function LoadingScreen({
  text = "Museo en construcción..."
}) {
  return (
    <div className="loading-overlay">
      <video 
        className="loading-video" 
        src="/videos/loading-teaser.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="loading-text">{text}</div>
    </div>
  );
}
