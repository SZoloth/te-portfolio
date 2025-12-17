import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgShift = ({
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
      d="M9 21.75v-.5a2 2 0 0 0-2-2H3.995a1.995 1.995 0 0 0-.548 3.913l4.106 1.174a1.995 1.995 0 0 1-.548 3.913H4a2 2 0 0 1-2-2v-.5m10.5-12.5v15.5m11-10v10m0-15.5v2m9.5-1.5h-1a3 3 0 0 0-3 3v12m-2.5-9.5H32m5-6v13a2 2 0 0 0 2 2h1m-6-9h6m-27.5 4.5v-1.5a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v6.5"
    />
  </svg>
);
