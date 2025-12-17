import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgOne = ({
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
      stroke="#FFF"
      strokeLinejoin="bevel"
      strokeWidth={1.5}
      d="M19.5 26.5v12m-4-12v12m5-35v17m6 6v12m-.13-.43L19.63 26.9"
    />
  </svg>
);
