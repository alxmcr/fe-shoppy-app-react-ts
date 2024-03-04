type IconCircleProps = {
  alt: string;
};
export default function IconCircle({ alt = '' }: IconCircleProps) {
  return (
    <svg
      aria-label={alt}
      xmlns="http://www.w3.org/2000/svg"
      width={38}
      height={38}
      fill="none"
    >
      <circle cx={19} cy={19} r={18.5} stroke="currentColor" />
    </svg>
  );
}
