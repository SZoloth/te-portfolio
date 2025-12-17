import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgMic = ({
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
    <circle cx={25.5} cy={16.75} r={4.5} fill="#F24B00" />
    <path stroke="#F24B00" strokeWidth={3} d="M23.5 18.25 12 29.75" />
  </svg>
);
