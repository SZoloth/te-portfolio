import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgPoRec = ({
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
      d="M32 0H0v32h32zM16 26c5.523 0 10-4.477 10-10S21.523 6 16 6 6 10.477 6 16s4.477 10 10 10"
      clipRule="evenodd"
    />
  </svg>
);
