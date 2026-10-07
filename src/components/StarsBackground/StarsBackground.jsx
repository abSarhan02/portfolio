import { useEffect } from "react";
import "./StarsBackground.css";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildStars(count, color) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const stars = [];

  for (let i = 0; i < count; i++) {
    const x = randomInt(0, width);
    const y = randomInt(0, height);

    stars.push(`${x}px ${y}px ${color}`);
  }

  return stars.join(", ");
}

function StarsBackground() {
  useEffect(() => {
    function generateStars() {
      const styles = getComputedStyle(document.documentElement);

      const layers = [
        {
          id: "stars",
          count: 700,
          color: "--star-color-1",
        },
        {
          id: "stars2",
          count: 400,
          color: "--star-color-2",
        },
        {
          id: "stars3",
          count: 200,
          color: "--star-color-3",
        },
      ];

      layers.forEach((layer) => {
        const element = document.getElementById(layer.id);

        if (!element) return;

        const color = styles
          .getPropertyValue(layer.color)
          .trim();

        const stars = buildStars(layer.count, color);

        element.style.setProperty("--stars", stars);
      });
    }

    generateStars();

    window.addEventListener("resize", generateStars);

    const observer = new MutationObserver(generateStars);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      window.removeEventListener("resize", generateStars);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="stars-bg">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}

export default StarsBackground;