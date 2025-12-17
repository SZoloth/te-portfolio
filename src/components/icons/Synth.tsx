import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgSynth = ({
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
      d="M4.5 23.25V25a2.75 2.75 0 1 0 5.5 0v-8a2.75 2.75 0 1 1 5.5 0v8a2.75 2.75 0 1 0 5.5 0v-8a2.75 2.75 0 1 1 5.5 0v8a2.75 2.75 0 1 0 5.5 0v-8a2.75 2.75 0 1 1 5.5 0v1.75"
    />
  </svg>
);
