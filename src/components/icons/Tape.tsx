import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgTape = ({
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
    <circle cx={12} cy={21} r={6} stroke="#FFF" strokeWidth={1.5} />
    <path stroke="#FFF" strokeWidth={1.5} d="M12 27h18" />
    <circle cx={30} cy={21} r={6} stroke="#FFF" strokeWidth={1.5} />
  </svg>
);
