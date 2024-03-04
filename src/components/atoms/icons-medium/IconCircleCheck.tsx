type IconCircleCheckProps = {
  alt: string;
};

export default function IconCircleCheck({ alt = '' }: IconCircleCheckProps) {
  return (
    <svg
      aria-label={alt}
      xmlns="http://www.w3.org/2000/svg"
      width={38}
      height={38}
      fill="none"
    >
      <path
        fill="currentColor"
        d="M19 0C8.55 0 0 8.55 0 19s8.55 19 19 19 19-8.55 19-19S29.45 0 19 0Zm7.98 15.77-9.12 9.12c-.76.76-1.9.76-2.66 0l-4.18-4.18c-.76-.76-.76-1.9 0-2.66.76-.76 1.9-.76 2.66 0l2.85 2.85 7.79-7.79c.76-.76 1.9-.76 2.66 0 .76.76.76 1.9 0 2.66Z"
      />
    </svg>
  );
}
