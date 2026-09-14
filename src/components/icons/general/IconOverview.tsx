type IconOverviewProps = {
    size?: number;
    className?: string;
  };
  
  export default function IconOverview({ size = 23, className = "shrink-0" }: IconOverviewProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M19.7753 15C20.8034 15 20.5256 14.1689 20.5256 13.1923V11.2733C20.7007 11.1057 22 9.00424 22 8.77078C22 8.53732 20.7007 6.43733 20.5256 6.2698V4.34921C20.5256 3.37264 20.8034 2.54167 19.7753 2.54167M4.22316 14.9612C3.19679 14.9612 3.47442 14.1689 3.47442 13.1923V11.2733C3.29932 11.1057 2 9.00424 2 8.77078C2 8.53732 3.29932 6.43733 3.47442 6.2698V4.34921C3.47605 3.37264 3.19842 2 4.22316 2M8.66653 8.77078H8.68153M15.3167 8.77078H15.3317"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  