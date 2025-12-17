import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgFive = ({
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
    <circle cx={13} cy={33} r={5} stroke="#FFF" strokeWidth={1.5} />
    <circle cx={27} cy={33} r={5} stroke="#FFF" strokeWidth={1.5} />
    <path stroke="#FFF" strokeWidth={1.5} d="M27 3.5H15v12" />
    <path
      stroke="#FFF"
      strokeWidth={1.5}
      d="M15 15.5a4.5 4.5 0 0 1 4.5-4.5H23a4 4 0 0 1 0 8h-8m-2 19h14m4-12.5c2 1 4.5 3.3 4.5 8.5"
    />
  </svg>
);
