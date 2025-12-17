import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgFolder = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="currentColor" d="M2 6h20v14H2z" />
    <path fill="currentColor" d="M2 4h8v4H2z" />
  </svg>
);
