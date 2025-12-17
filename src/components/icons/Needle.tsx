import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
export const SvgNeedle = ({
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
      d="m6.341 3.856 5.508 5.508c.57.57.558 1.507-.028 2.093s-1.523.598-2.093.028L4.22 5.977c-.57-.57-.558-1.508.028-2.093.585-.586 1.523-.599 2.093-.028M2.098 8.098c-1.71-1.71-1.673-4.523.084-6.28s4.57-1.795 6.28-.084l5.508 5.508c1.35 1.35 1.612 3.383.801 5.044l17.202 17.202-2.121 2.121L12.65 14.407c-1.661.81-3.695.549-5.044-.8z"
      clipRule="evenodd"
    />
  </svg>
);
