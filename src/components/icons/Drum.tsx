import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgDrum = ({
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
    <circle cx={21} cy={20.5} r={9.5} stroke="#FFF" strokeWidth={1.5} />
    <path stroke="#FFF" strokeWidth={1.5} d="M21 34V21" />
    <path
      fill="#FFF"
      d="M18.5 18.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"
    />
    <path
      fill="#FFF"
      fillRule="evenodd"
      d="M22.75 23h-1v1a1 1 0 0 1 1-1m-3.5 0h1v1a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);
