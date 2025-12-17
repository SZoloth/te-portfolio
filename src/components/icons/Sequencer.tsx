import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgSequencer = ({
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
    <circle cx={9} cy={22.5} r={2.5} fill="#FFF" />
    <circle cx={17} cy={15.5} r={2.5} fill="#FFF" />
    <circle cx={25} cy={22.5} r={2.5} fill="#FFF" />
    <circle cx={33} cy={22.5} r={2.5} fill="#FFF" />
  </svg>
);
