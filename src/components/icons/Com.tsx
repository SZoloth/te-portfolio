import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgCom = ({
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
    <circle cx={21} cy={9.5} r={7.5} stroke="#FFF" strokeWidth={1.5} />
    <circle cx={21} cy={9.5} r={2} fill="#FFF" />
    <path
      stroke="#FFF"
      strokeWidth={1.5}
      d="M13 28a3 3 0 0 0-3-3H8.5A3.5 3.5 0 0 0 5 28.5v4A3.5 3.5 0 0 0 8.5 36h1a3.5 3.5 0 0 0 3.5-3.5m8.5-7.5h-1a3.5 3.5 0 0 0-3.5 3.5v4a3.5 3.5 0 0 0 3.5 3.5h1a3.5 3.5 0 0 0 3.5-3.5v-4a3.5 3.5 0 0 0-3.5-3.5Z"
    />
    <path
      stroke="#FFF"
      strokeLinejoin="bevel"
      strokeWidth={1.5}
      d="M29 24.5v12m8-12v12m-.12-11.6L33 32l-3.87-7.1"
    />
  </svg>
);
