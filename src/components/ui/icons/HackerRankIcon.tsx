
import { SVGProps } from "react";

export const HackerRankIcon = ({ size = 35, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M256 32L32 160v192l224 128 224-128V160L256 32zm88 296h-56v-48h-64v48h-56V184h56v48h64v-48h56v144z" />
  </svg>
);
