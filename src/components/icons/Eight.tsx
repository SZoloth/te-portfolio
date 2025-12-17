import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgEight = ({
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
      d="M10.5 26v12m8-12v12m-.12-11.6-3.88 7.1-3.87-7.1"
    />
    <path
      stroke="#FFF"
      strokeWidth={1.5}
      d="M31.5 37.5H23v-1l7.152-4.47c.527-.33.848-.908.848-1.53V30a3.5 3.5 0 0 0-3.5-3.5H26a3.5 3.5 0 0 0-3.5 3.5v1m1-20h-5a3.75 3.75 0 1 1 0-7.5h5a3.75 3.75 0 1 1 0 7.5Zm0 7.5h-5a3.75 3.75 0 1 1 0-7.5h5a3.75 3.75 0 1 1 0 7.5Z"
    />
  </svg>
);
