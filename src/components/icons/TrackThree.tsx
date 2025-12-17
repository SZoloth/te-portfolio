import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgTrackThree = ({
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
      d="M8.5 14a8 8 0 0 1 8-8H26a7.5 7.5 0 0 1 0 15H16m-7.5 7a8 8 0 0 0 8 8H26a7.5 7.5 0 0 0 0-15H16"
    />
  </svg>
);
