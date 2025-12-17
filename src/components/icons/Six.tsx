import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgSix = ({
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
    <circle cx={12} cy={32.5} r={1.5} fill="#FFF" />
    <circle cx={18} cy={32.5} r={1.5} fill="#FFF" />
    <circle cx={24} cy={32.5} r={1.5} fill="#FFF" />
    <circle cx={30} cy={32.5} r={1.5} fill="#FFF" />
    <path
      stroke="#FFF"
      strokeWidth={1.5}
      d="M27.25 8a4.5 4.5 0 0 0-4.5-4.5h-3a5 5 0 0 0-5 5V15"
    />
    <path
      stroke="#FFF"
      strokeWidth={1.5}
      d="M23.5 19h-5a3.75 3.75 0 1 1 0-7.5h5a3.75 3.75 0 1 1 0 7.5Z"
    />
  </svg>
);
