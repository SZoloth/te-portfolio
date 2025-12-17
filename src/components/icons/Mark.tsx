import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgMark = ({
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
    <rect
      width={27}
      height={16}
      x={7.5}
      y={11}
      stroke="#FFF"
      strokeWidth={1.5}
      rx={8}
    />
    <path stroke="#FFF" strokeWidth={1.5} d="M21 27v6.5" />
    <path
      fill="#FFF"
      fillRule="evenodd"
      d="M23.75 27.75h-2v2a2 2 0 0 1 2-2m-5.5 0h2v2a2 2 0 0 0-2-2"
      clipRule="evenodd"
    />
  </svg>
);
