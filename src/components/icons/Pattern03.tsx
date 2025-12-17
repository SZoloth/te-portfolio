import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgPattern03 = ({
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
    <path fill="currentColor" d="M32 16.5v3H0v-3z" />
    <path
      fill="currentColor"
      d="m27.253 2.626 2.121 2.12L6.747 27.375l-2.121-2.121z"
    />
  </svg>
);
