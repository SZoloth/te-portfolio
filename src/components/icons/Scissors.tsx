import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgScissors = ({
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
      strokeWidth={1.5}
      d="m11.981 23.147 22.788-8.294m-22.788 3 22.788 8.294"
    />
    <circle cx={13} cy={14.5} r={3.5} stroke="#FFF" strokeWidth={1.5} />
    <circle cx={13} cy={26.5} r={3.5} stroke="#FFF" strokeWidth={1.5} />
  </svg>
);
