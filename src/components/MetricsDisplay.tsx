'use client';

import React, { useEffect, useState } from 'react';
import { SevenSegment } from './te-design-system/SevenSegment';

interface Metric {
  label: string;
  value: number;
  suffix?: string;
  color?: 'orange' | 'blue' | 'red' | 'white' | 'green';
}

interface MetricsDisplayProps {
  metrics: Metric[];
  animateOnMount?: boolean;
  className?: string;
}

/**
 * MetricsDisplay - Animated metrics panel
 * Supports both seven-segment (hardware themes) and simple number (editorial themes) display
 * Values count up from 0 on mount for visual effect
 */
export const MetricsDisplay: React.FC<MetricsDisplayProps> = ({
  metrics,
  animateOnMount = true,
  className = '',
}) => {
  const [displayValues, setDisplayValues] = useState<number[]>(
    animateOnMount ? metrics.map(() => 0) : metrics.map((m) => m.value)
  );

  useEffect(() => {
    if (!animateOnMount) return;

    const duration = 1500; // Animation duration in ms
    const steps = 30;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Ease-out function for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValues(
        metrics.map((m) => Math.round(m.value * eased))
      );

      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayValues(metrics.map((m) => m.value));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [metrics, animateOnMount]);

  return (
    <div className={`flex flex-wrap gap-8 ${className}`}>
      {metrics.map((metric, index) => (
        <div key={metric.label} className="flex flex-col items-center gap-2">
          {/* Seven-segment value (hardware themes) */}
          <div className="seven-segment-container flex items-baseline gap-1">
            <SevenSegment
              value={displayValues[index]}
              digits={String(metric.value).length}
              color={metric.color || 'orange'}
              size="lg"
            />
            {metric.suffix && (
              <span className="text-[var(--accent)] text-sm ml-1">
                {metric.suffix}
              </span>
            )}
          </div>

          {/* Simple number value (editorial themes) */}
          <div className="metric-value-simple hidden">
            <span className="text-4xl font-bold text-[var(--foreground)]">
              {displayValues[index]}
            </span>
            {metric.suffix && (
              <span className="text-[var(--accent)] text-lg ml-1">
                {metric.suffix}
              </span>
            )}
          </div>

          {/* Label */}
          <span className="text-[var(--muted)] text-xs uppercase tracking-wider">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MetricsDisplay;
