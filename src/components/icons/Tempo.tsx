import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgTempo = ({
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
      fill="currentColor"
      fillRule="evenodd"
      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16m-1-20a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m5-5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m3 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      clipRule="evenodd"
    />
  </svg>
);
