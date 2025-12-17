import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgSettings = ({
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
    <path
      fill="#FFF"
      d="M10 2h4v4h-4zm0 16h4v4h-4zm-8-8h4v4H2zm16 0h4v4h-4zM6 6h12v12H6z"
    />
    <path d="M9 9h6v6H9z" />
  </svg>
);
