import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgThree = ({
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
      d="M14.5 8A4.5 4.5 0 0 1 19 3.5h4A3.5 3.5 0 0 1 26.5 7v.5A3.5 3.5 0 0 1 23 11h-5m-3.5 3a4.5 4.5 0 0 0 4.5 4.5h4a3.5 3.5 0 0 0 3.5-3.5v-.5A3.5 3.5 0 0 0 23 11h-5m-2 17h-1.25a4.75 4.75 0 1 0 0 9.5h11.5a4.75 4.75 0 1 0 0-9.5H23"
    />
    <path fill="#FFF" d="M23.5 31v-6l-5 3z" />
  </svg>
);
