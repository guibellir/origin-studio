import { useId } from "react";

type LogoProps = {
  variant?: "dark" | "light";
  markOnly?: boolean;
  compact?: boolean;
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  markSize?: number;
};

/**
 * Origin Studio — O com slash + wordmark.
 * Compact: uma linha "Origin Studio" (melhor no mobile).
 */
export default function Logo({
  variant = "dark",
  markOnly = false,
  compact = false,
  className = "",
  markClassName = "",
  wordmarkClassName = "",
  markSize = 36,
}: LogoProps) {
  const textMain = variant === "dark" ? "text-white" : "text-ink";
  const textSoft = variant === "dark" ? "text-white/55" : "text-muted";

  return (
    <span className={`inline-flex max-w-full items-center gap-2 ${className}`}>
      <LogoMark size={markSize} className={markClassName} />
      {!markOnly && (
        <span
          className={`min-w-0 leading-tight ${wordmarkClassName} ${
            compact ? "flex items-baseline gap-1.5" : "flex flex-col"
          }`}
        >
          <span
            className={`truncate font-semibold tracking-tight ${textMain} ${
              compact ? "text-[14px] sm:text-[15px]" : "text-[15px]"
            }`}
          >
            <span className="text-[#4f55f1]">O</span>
            <span>rigin</span>
          </span>
          <span
            className={`font-medium tracking-wide ${textSoft} ${
              compact
                ? "text-[13px] sm:text-[14px]"
                : "mt-0.5 text-[10px] uppercase tracking-[0.16em]"
            }`}
          >
            Studio
          </span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({
  className = "",
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient
          id={`${uid}-b`}
          x1="12"
          y1="8"
          x2="48"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8b8fff" />
          <stop offset="0.45" stopColor="#4f55f1" />
          <stop offset="1" stopColor="#2f34b8" />
        </linearGradient>
        <linearGradient
          id={`${uid}-s`}
          x1="20"
          y1="28"
          x2="52"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#e4e6ef" />
          <stop offset="1" stopColor="#a8adbc" />
        </linearGradient>
        <linearGradient
          id={`${uid}-l`}
          x1="10"
          y1="48"
          x2="54"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#cfd3e8" />
          <stop offset="1" stopColor="#6b70ff" />
        </linearGradient>
      </defs>

      <path
        d="M48.8 22.5C46.2 14.8 38.9 9.2 30.2 9.2c-11.5 0-20.8 9.3-20.8 20.8 0 2.1.3 4.1.9 6"
        stroke={`url(#${uid}-b)`}
        strokeWidth="9.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15.2 41.5C17.8 49.2 25.1 54.8 33.8 54.8c11.5 0 20.8-9.3 20.8-20.8 0-2.1-.3-4.1-.9-6"
        stroke={`url(#${uid}-s)`}
        strokeWidth="9.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12.5 46.5L51.5 17.5"
        stroke={`url(#${uid}-l)`}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M46 15.2L54.2 12.8L49.8 19.6L46 15.2Z"
        fill={`url(#${uid}-b)`}
      />
    </svg>
  );
}
