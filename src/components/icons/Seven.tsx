import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgSeven = ({
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
    <path stroke="#FFF" strokeWidth={1.5} d="M15 4h13L16.5 20" />
    <path
      stroke="#FFF"
      strokeLinejoin="bevel"
      strokeWidth={1.5}
      d="M14.5 26v12m8-12v12m-.12-11.6-3.88 7.1-3.87-7.1"
    />
    <path stroke="#FFF" strokeWidth={1.5} d="M27.5 26v12" />
  </svg>
);
