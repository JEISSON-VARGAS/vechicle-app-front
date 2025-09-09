import React, { useEffect, useState } from "react";
import "../styles/splash.css";

export default function SplashScreen({ onFinish }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // La animación dura 2.5s
    const timer = setTimeout(() => {
      setHide(true);
      if (onFinish) onFinish();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-container ${hide ? "hide" : ""}`}>
      <div className="splash-curtain"></div>
    </div>
  );
}
