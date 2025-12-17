import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgPoMetronome = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    role="img"
    {...props}
  >
    <path
      fill="#020202"
      fillRule="evenodd"
      d="m10.842 41 9.5-38h6.263l8.637 38h-7.498a4.502 4.502 0 0 0-8.488 0zM18 0h11l9.318 41v3H7.75v-3z"
      clipRule="evenodd"
    />
    <path fill="#020202" d="m42.142 22 2.121 2.121-14.142 14.142L28 36.143z" />
    <circle cx={42} cy={24} r={5} fill="#020202" />
    <path
      fill="currentColor"
      d="m4.858 22-2.121 2.121 14.142 14.142L19 36.143z"
    />
    <circle
      cx={5}
      cy={5}
      r={5}
      fill="currentColor"
      transform="matrix(-1 0 0 1 10 19)"
    />
  </svg>
);
