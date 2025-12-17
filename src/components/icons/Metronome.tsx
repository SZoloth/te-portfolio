import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgMetronome = ({
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
      d="M29.5 30.5h-17V28L19 9h4l6.5 19zm-8.5-4 9.5-13"
    />
    <circle cx={31.25} cy={12.75} r={2.25} fill="#FFF" />
  </svg>
);
