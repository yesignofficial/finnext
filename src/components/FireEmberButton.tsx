import React, {
  useState,
  MouseEvent,
  ButtonHTMLAttributes,
  ReactNode,
  useEffect,
} from "react";

// Type definitions for color schemes
export type ColorScheme = {
  gradient: string[];
  shadowColor: string;
  textColor: string;
  glowColor: string;
};

// Predefined color schemes
export const COLOR_SCHEMES = {
  fire: {
    gradient: ["#ff9a56", "#ff6b35", "#ff4757", "#ff3742"],
    shadowColor: "rgba(255, 107, 53, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(255, 107, 53, 0.4)",
  },
  gold: {
    gradient: ["#d4af37", "#f4e4a6", "#e6d06f", "#b8860b"],
    shadowColor: "rgba(212, 175, 55, 0.6)",
    textColor: "#2c1810",
    glowColor: "rgba(212, 175, 55, 0.4)",
  },
  ocean: {
    gradient: ["#667eea", "#764ba2", "#5a67d8", "#4c51bf"],
    shadowColor: "rgba(102, 126, 234, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(102, 126, 234, 0.4)",
  },
  emerald: {
    gradient: ["#27ae60", "#2ecc71", "#58d68d", "#16a085"],
    shadowColor: "rgba(46, 204, 113, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(46, 204, 113, 0.4)",
  },
  sunset: {
    gradient: ["#ff9a9e", "#fecfef", "#ff6b9d", "#ee5a6f"],
    shadowColor: "rgba(255, 154, 158, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(255, 154, 158, 0.4)",
  },
  purple: {
    gradient: ["#667eea", "#764ba2", "#8e44ad", "#9b59b6"],
    shadowColor: "rgba(142, 68, 173, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(142, 68, 173, 0.4)",
  },
  // Perfect for Accounting Academy - Professional Blue Theme
  professional: {
    gradient: ["#1e3a8a", "#3b82f6", "#60a5fa", "#93c5fd"],
    shadowColor: "rgba(59, 130, 246, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(59, 130, 246, 0.4)",
  },
} satisfies Record<string, ColorScheme>;

export type PresetColorScheme = keyof typeof COLOR_SCHEMES;

export type ButtonSize = "small" | "medium" | "large";

export interface FireEmberButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  children: ReactNode;
  colorScheme?: PresetColorScheme | ColorScheme;
  size?: ButtonSize;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  sparkleIntensity?: "low" | "medium" | "high";
  animationSpeed?: "slow" | "medium" | "fast";
}

interface SizeConfig {
  padding: string;
  fontSize: string;
  borderRadius: string;
  sparkleSize: string;
}

// Global styles - only injected once
let globalStylesInjected = false;

const injectGlobalStyles = () => {
  if (typeof document === "undefined" || globalStylesInjected) return;

  const styleElement = document.createElement("style");
  styleElement.textContent = `
    @keyframes fireFlicker {
      0%, 100% { background-position: 0% 50%; }
      25% { background-position: 100% 25%; }
      50% { background-position: 50% 100%; }
      75% { background-position: 25% 0%; }
    }

    @keyframes sparkle {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes emberExplosion {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(3);
        opacity: 0;
      }
    }

    .fire-ember-button {
      animation: fireFlicker var(--fire-animation-duration, 3s) ease infinite;
    }

    .fire-ember-button::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,var(--fire-sparkle-opacity, 0.5)) 1px, transparent 1px);
      background-size: var(--fire-sparkle-size, 20px) var(--fire-sparkle-size, 20px);
      animation: sparkle calc(var(--fire-animation-duration, 3s) * 1.3) linear infinite;
      pointer-events: none;
    }

    .fire-ember-button:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 
        0 0 30px var(--fire-shadow-color, rgba(212, 175, 55, 0.6)),
        0 20px 45px var(--fire-glow-color, rgba(212, 175, 55, 0.4));
    }

    .fire-ember-button:disabled:hover {
      transform: none;
      box-shadow: 
        0 0 20px var(--fire-shadow-color, rgba(212, 175, 55, 0.6)),
        0 15px 35px var(--fire-glow-color, rgba(212, 175, 55, 0.4));
    }

    .fire-ember-button:active {
      transform: translateY(-2px) scale(0.98);
    }
  `;

  document.head.appendChild(styleElement);
  globalStylesInjected = true;
};

const FireEmberButton: React.FC<FireEmberButtonProps> = ({
  children,
  colorScheme = "gold",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  sparkleIntensity = "medium",
  animationSpeed = "medium",
  ...props
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  // Inject global styles on mount (client-side only)
  useEffect(() => {
    injectGlobalStyles();
  }, []);

  // Get color scheme (either preset or custom)
  const colors: ColorScheme =
    typeof colorScheme === "string" ? COLOR_SCHEMES[colorScheme] : colorScheme;

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (disabled) return;

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);

    // Create explosion effect
    const button = e.currentTarget;
    const explosion = document.createElement("div");
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - 50;
    const y = e.clientY - rect.top - 50;

    explosion.style.cssText = `
      position: absolute;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: radial-gradient(circle, ${colors.shadowColor} 0%, transparent 70%);
      pointer-events: none;
      animation: emberExplosion 0.6s ease-out;
      left: ${x}px;
      top: ${y}px;
      z-index: 10;
    `;

    button.appendChild(explosion);
    setTimeout(() => explosion.remove(), 600);

    if (onClick) onClick(e);
  };

  const sizeStyles: Record<ButtonSize, SizeConfig> = {
    small: {
      padding: "14px 32px",
      fontSize: "14px",
      borderRadius: "12px",
      sparkleSize: "15px",
    },
    medium: {
      padding: "16px 36px",
      fontSize: "15px",
      borderRadius: "14px",
      sparkleSize: "18px",
    },
    large: {
      padding: "24px 55px",
      fontSize: "18px",
      borderRadius: "18px",
      sparkleSize: "25px",
    },
  };

  const sparkleIntensities = {
    low: "0.3",
    medium: "0.5",
    high: "0.8",
  };

  const animationSpeeds = {
    slow: "5s",
    medium: "3s",
    fast: "2s",
  };

  const baseStyles: React.CSSProperties = {
    background: `linear-gradient(45deg, ${colors.gradient.join(", ")})`,
    backgroundSize: "400% 400%",
    color: colors.textColor,
    border: "none",
    ...sizeStyles[size],
    fontWeight: "700",
    cursor: disabled ? "not-allowed" : "pointer",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
    opacity: disabled ? 0.6 : 1,
    transform: isClicked ? "translateY(-2px) scale(0.98)" : "",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    boxShadow: `
      0 0 20px ${colors.shadowColor},
      0 15px 35px ${colors.glowColor}
    `,
    // CSS custom properties for the animations
    "--fire-animation-duration": animationSpeeds[animationSpeed],
    "--fire-sparkle-opacity": sparkleIntensities[sparkleIntensity],
    "--fire-sparkle-size": sizeStyles[size].sparkleSize,
    "--fire-shadow-color": colors.shadowColor,
    "--fire-glow-color": colors.glowColor,
  } as React.CSSProperties;

  return (
    <button
      className={`fire-ember-button ${className}`}
      style={baseStyles}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default FireEmberButton;
