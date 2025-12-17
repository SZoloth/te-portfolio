import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgPattern02 = ({
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
      d="M31 17.406v-2.812H19.977l7.387-7.387-1.99-1.988-7.968 7.968V1h-2.812v12.662L6.15 5.219 4.16 7.208l7.387 7.386H1v2.812h12.187l-9.025 9.026L6.15 28.42l8.444-8.444V31h2.812V20.452l7.969 7.969 1.989-1.989-9.026-9.026z"
      clipRule="evenodd"
    />
  </svg>
);
