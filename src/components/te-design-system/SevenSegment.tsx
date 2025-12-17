import React from 'react';

interface SevenSegmentProps {
  value: number | string;
  digits?: number;
  color?: 'orange' | 'blue' | 'red' | 'white' | 'green';
  size?: 'sm' | 'md' | 'lg';
  showLeadingZeros?: boolean;
  className?: string;
}

// Segment mapping: which segments are ON for each digit (0-9)
// Segments are arranged:  _a_
//                        |   |
//                        f   b
//                        |_g_|
//                        |   |
//                        e   c
//                        |_d_|
const DIGIT_SEGMENTS: Record<string, boolean[]> = {
  '0': [true, true, true, true, true, true, false],    // a,b,c,d,e,f
  '1': [false, true, true, false, false, false, false],
  '2': [true, true, false, true, true, false, true],
  '3': [true, true, true, true, false, false, true],
  '4': [false, true, true, false, false, true, true],
  '5': [true, false, true, true, false, true, true],
  '6': [true, false, true, true, true, true, true],
  '7': [true, true, true, false, false, false, false],
  '8': [true, true, true, true, true, true, true],
  '9': [true, true, true, true, false, true, true],
  '-': [false, false, false, false, false, false, true],
  ' ': [false, false, false, false, false, false, false],
  '.': [false, false, false, false, false, false, false], // handled separately
};

const COLORS = {
  orange: '#FF6B00',
  blue: '#00A3FF',
  red: '#FF3B30',
  white: '#FFFFFF',
  green: '#30D158',
};

const SIZES = {
  sm: { width: 20, height: 32, strokeWidth: 3 },
  md: { width: 30, height: 48, strokeWidth: 4 },
  lg: { width: 45, height: 72, strokeWidth: 6 },
};

interface DigitProps {
  char: string;
  color: string;
  offColor: string;
  size: typeof SIZES.md;
}

const Digit: React.FC<DigitProps> = ({ char, color, offColor, size }) => {
  const { width, height, strokeWidth } = size;
  const segments = DIGIT_SEGMENTS[char] || DIGIT_SEGMENTS[' '];

  // Calculate segment positions
  const margin = strokeWidth;
  const segLength = width - margin * 2;
  const segHeight = (height - margin * 3) / 2;

  // Segment paths (horizontal and vertical)
  const horizontalSegment = (x: number, y: number, on: boolean) => (
    <rect
      x={x}
      y={y - strokeWidth / 2}
      width={segLength}
      height={strokeWidth}
      fill={on ? color : offColor}
      rx={1}
    />
  );

  const verticalSegment = (x: number, y: number, on: boolean) => (
    <rect
      x={x - strokeWidth / 2}
      y={y}
      width={strokeWidth}
      height={segHeight}
      fill={on ? color : offColor}
      rx={1}
    />
  );

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Segment A (top) */}
      {horizontalSegment(margin, margin, segments[0])}

      {/* Segment B (top right) */}
      {verticalSegment(width - margin, margin + strokeWidth / 2, segments[1])}

      {/* Segment C (bottom right) */}
      {verticalSegment(width - margin, height / 2 + strokeWidth / 2, segments[2])}

      {/* Segment D (bottom) */}
      {horizontalSegment(margin, height - margin, segments[3])}

      {/* Segment E (bottom left) */}
      {verticalSegment(margin, height / 2 + strokeWidth / 2, segments[4])}

      {/* Segment F (top left) */}
      {verticalSegment(margin, margin + strokeWidth / 2, segments[5])}

      {/* Segment G (middle) */}
      {horizontalSegment(margin, height / 2, segments[6])}
    </svg>
  );
};

export const SevenSegment: React.FC<SevenSegmentProps> = ({
  value,
  digits = 3,
  color = 'orange',
  size = 'md',
  showLeadingZeros = false,
  className = '',
}) => {
  const activeColor = COLORS[color];
  const offColor = `${activeColor}22`; // 13% opacity for "off" segments
  const sizeConfig = SIZES[size];

  // Convert value to string and pad/trim to digit count
  let displayValue = String(value);

  if (showLeadingZeros) {
    displayValue = displayValue.padStart(digits, '0');
  } else {
    displayValue = displayValue.padStart(digits, ' ');
  }

  // Limit to specified digits
  displayValue = displayValue.slice(-digits);

  const gap = sizeConfig.strokeWidth;

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        gap: `${gap}px`,
        backgroundColor: '#000',
        padding: `${gap * 2}px`,
        borderRadius: '4px',
      }}
    >
      {displayValue.split('').map((char, index) => (
        <Digit
          key={index}
          char={char}
          color={activeColor}
          offColor={offColor}
          size={sizeConfig}
        />
      ))}
    </div>
  );
};

export default SevenSegment;
