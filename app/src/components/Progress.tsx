import React from "react";
import { ProgressBar } from '@themesberg/react-bootstrap';

export interface ProgressProps {
  label?: string;
  variant?: string;
  value?: number;
  type?: "label" | "tooltip";
  size?: "sm" | "md" | "lg" | "xl";
}

const Progress: React.FC<ProgressProps> = ({
  label,
  variant = "primary",
  value,
  type = "label",
  size = "md"
}) => {
  const finalValue = value !== undefined
    ? value
    : Math.floor(Math.random() * (100 - 20 + 1)) + 20;
  const textColor = type === "label" ? variant : "white";
  const bgColorClass = type === "tooltip" ? `bg-${variant}` : "";

  return (
    <div className="progress-wrapper">
      <div className="progress-info">
        <div className={`progress-${type} text-${textColor} ${bgColorClass}`}>
          {label}
        </div>
        <div className="progress-percentage">
          <span>{finalValue}%</span>
        </div>
      </div>
      <ProgressBar className={`progress-${size}`} variant={variant} now={finalValue} min={0} max={100} />
    </div>
  );
};

export default Progress;