import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgTwo = ({
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
      d="M5 34.5v-4A3.5 3.5 0 0 1 8.5 27H10a3.5 3.5 0 0 1 3.5 3.5v4A3.5 3.5 0 0 1 10 38H8.5A3.5 3.5 0 0 1 5 34.5Zm12.5-8.25V35a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-8.75m3 .75h9M33 27v11"
    />
    <path
      stroke="#FFF"
      strokeWidth={1.5}
      d="M14.5 9V8A4.5 4.5 0 0 1 19 3.5h3A4.5 4.5 0 0 1 26.5 8a3.83 3.83 0 0 1-1.642 3.142L15 18v1h12"
    />
  </svg>
);
