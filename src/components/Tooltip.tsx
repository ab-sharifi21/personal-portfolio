export function Tooltip({ message, children, styles }: any) {
  return (
    <div className="group relative flex">
      {children}
      <span
        className={`absolute ${styles} scale-0 rounded bg-skill-bg-color p-2 text-xs transition-all group-hover:scale-100 dark:bg-dark-secondary-bg-color`}
      >
        {message}
      </span>
    </div>
  );
}
