import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgBackward = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="#FFF" d="m12 4-8 8 8 8zm8 0-8 8 8 8z" />
  </svg>
);
