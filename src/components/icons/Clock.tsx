import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgClock = ({
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
      fill="#E0A266"
      fillRule="evenodd"
      d="M3.175.809C.325 2.474-.653 6.162.993 9.046l10.325-6.03C9.672.132 6.026-.856 3.175.81m11.727 35.176c6.584 0 11.922-5.4 11.922-12.06s-5.338-12.06-11.922-12.06S2.98 17.263 2.98 23.924s5.338 12.06 11.922 12.06m0 3.015c8.23 0 14.902-6.75 14.902-15.075 0-8.326-6.672-15.076-14.902-15.076S0 15.6 0 23.925 6.672 39 14.902 39m-1.49-18.803v-6.323h2.98v6.323a4 4 0 0 1 2.195 2.22h4.263v3.015h-4.263a3.98 3.98 0 0 1-3.685 2.513c-2.195 0-3.974-1.8-3.974-4.02a4.02 4.02 0 0 1 2.484-3.728M29.2 9.047c1.646-2.885.67-6.573-2.181-8.238s-6.497-.677-8.143 2.207z"
      clipRule="evenodd"
    />
  </svg>
);
