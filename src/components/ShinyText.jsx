import { useEffect, useState } from 'react';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const [isDark, setIsDark] = useState(false);
  const animationDuration = `${speed}s`;

  useEffect(() => {
    // Initial check
    const checkTheme = () =>
      setIsDark(document.documentElement.classList.contains('dark'));

    checkTheme();

    // Observe theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Light mode fallback – just render plain bold text
  if (!isDark) {
    return (
      <div
        className={`text-black bg-clip-text inline-block font-extrabold tracking-wide ${
          disabled ? '' : 'animate-shine'
        } ${className}`}
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'black',
          animationDuration,
        }}
      >
        {text}
      </div>
    );
  }

  // Dark mode shine
  return (
    <div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
